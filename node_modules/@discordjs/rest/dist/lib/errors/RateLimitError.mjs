class RateLimitError extends Error {
  constructor({ timeToReset, limit, method, hash, url, route, majorParameter, global }) {
    super();
    this.timeToReset = timeToReset;
    this.limit = limit;
    this.method = method;
    this.hash = hash;
    this.url = url;
    this.route = route;
    this.majorParameter = majorParameter;
    this.global = global;
  }
  get name() {
    return `${RateLimitError.name}[${this.route}]`;
  }
}

export { RateLimitError };
//# sourceMappingURL=RateLimitError.mjs.map
