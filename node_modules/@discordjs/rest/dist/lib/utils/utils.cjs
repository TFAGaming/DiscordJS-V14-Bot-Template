'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const node_buffer = require('node:buffer');
const node_url = require('node:url');
const node_util = require('node:util');
const undici = require('undici');
const RequestManager = require('../RequestManager.cjs');

function parseHeader(header) {
  if (header === void 0) {
    return header;
  } else if (typeof header === "string") {
    return header;
  }
  return header.join(";");
}
function serializeSearchParam(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
    case "bigint":
    case "boolean":
      return value.toString();
    case "object":
      if (value === null)
        return null;
      if (value instanceof Date) {
        return Number.isNaN(value.getTime()) ? null : value.toISOString();
      }
      if (typeof value.toString === "function" && value.toString !== Object.prototype.toString)
        return value.toString();
      return null;
    default:
      return null;
  }
}
function makeURLSearchParams(options) {
  const params = new node_url.URLSearchParams();
  if (!options)
    return params;
  for (const [key, value] of Object.entries(options)) {
    const serialized = serializeSearchParam(value);
    if (serialized !== null)
      params.append(key, serialized);
  }
  return params;
}
function parseResponse(res) {
  const header = parseHeader(res.headers["content-type"]);
  if (header?.startsWith("application/json")) {
    return res.body.json();
  }
  return res.body.arrayBuffer();
}
function hasSublimit(bucketRoute, body, method) {
  if (bucketRoute === "/channels/:id") {
    if (typeof body !== "object" || body === null)
      return false;
    if (method !== RequestManager.RequestMethod.Patch)
      return false;
    const castedBody = body;
    return ["name", "topic"].some((key) => Reflect.has(castedBody, key));
  }
  return true;
}
async function resolveBody(body) {
  if (body == null) {
    return null;
  } else if (typeof body === "string") {
    return body;
  } else if (node_util.types.isUint8Array(body)) {
    return body;
  } else if (node_util.types.isArrayBuffer(body)) {
    return new Uint8Array(body);
  } else if (body instanceof node_url.URLSearchParams) {
    return body.toString();
  } else if (body instanceof DataView) {
    return new Uint8Array(body.buffer);
  } else if (body instanceof node_buffer.Blob) {
    return new Uint8Array(await body.arrayBuffer());
  } else if (body instanceof undici.FormData) {
    return body;
  } else if (body[Symbol.iterator]) {
    const chunks = [...body];
    const length = chunks.reduce((a, b) => a + b.length, 0);
    const uint8 = new Uint8Array(length);
    let lengthUsed = 0;
    return chunks.reduce((a, b) => {
      a.set(b, lengthUsed);
      lengthUsed += b.length;
      return a;
    }, uint8);
  } else if (body[Symbol.asyncIterator]) {
    const chunks = [];
    for await (const chunk of body) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  }
  throw new TypeError(`Unable to resolve body.`);
}

exports.hasSublimit = hasSublimit;
exports.makeURLSearchParams = makeURLSearchParams;
exports.parseHeader = parseHeader;
exports.parseResponse = parseResponse;
exports.resolveBody = resolveBody;
//# sourceMappingURL=utils.cjs.map
