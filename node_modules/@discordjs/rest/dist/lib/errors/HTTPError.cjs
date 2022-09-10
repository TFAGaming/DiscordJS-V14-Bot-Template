'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class HTTPError extends Error {
  constructor(name, status, method, url, bodyData) {
    super();
    this.name = name;
    this.status = status;
    this.method = method;
    this.url = url;
    this.requestBody = { files: bodyData.files, json: bodyData.body };
  }
}

exports.HTTPError = HTTPError;
//# sourceMappingURL=HTTPError.cjs.map
