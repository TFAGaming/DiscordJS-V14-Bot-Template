function isErrorGroupWrapper(error) {
  return Reflect.has(error, "_errors");
}
function isErrorResponse(error) {
  return typeof Reflect.get(error, "message") === "string";
}
class DiscordAPIError extends Error {
  constructor(rawError, code, status, method, url, bodyData) {
    super(DiscordAPIError.getMessage(rawError));
    this.rawError = rawError;
    this.code = code;
    this.status = status;
    this.method = method;
    this.url = url;
    this.requestBody = { files: bodyData.files, json: bodyData.body };
  }
  get name() {
    return `${DiscordAPIError.name}[${this.code}]`;
  }
  static getMessage(error) {
    let flattened = "";
    if ("code" in error) {
      if (error.errors) {
        flattened = [...this.flattenDiscordError(error.errors)].join("\n");
      }
      return error.message && flattened ? `${error.message}
${flattened}` : error.message || flattened || "Unknown Error";
    }
    return error.error_description ?? "No Description";
  }
  static *flattenDiscordError(obj, key = "") {
    if (isErrorResponse(obj)) {
      return yield `${key.length ? `${key}[${obj.code}]` : `${obj.code}`}: ${obj.message}`.trim();
    }
    for (const [k, v] of Object.entries(obj)) {
      const nextKey = k.startsWith("_") ? key : key ? Number.isNaN(Number(k)) ? `${key}.${k}` : `${key}[${k}]` : k;
      if (typeof v === "string") {
        yield v;
      } else if (isErrorGroupWrapper(v)) {
        for (const error of v._errors) {
          yield* this.flattenDiscordError(error, nextKey);
        }
      } else {
        yield* this.flattenDiscordError(v, nextKey);
      }
    }
  }
}

export { DiscordAPIError };
//# sourceMappingURL=DiscordAPIError.mjs.map
