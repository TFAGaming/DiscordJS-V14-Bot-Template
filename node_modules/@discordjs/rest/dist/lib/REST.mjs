import { EventEmitter } from 'node:events';
import { CDN } from './CDN.mjs';
import { RequestManager, RequestMethod } from './RequestManager.mjs';
import { DefaultRestOptions, RESTEvents } from './utils/constants.mjs';
import { parseResponse } from './utils/utils.mjs';

class REST extends EventEmitter {
  constructor(options = {}) {
    super();
    this.cdn = new CDN(options.cdn ?? DefaultRestOptions.cdn);
    this.requestManager = new RequestManager(options).on(RESTEvents.Debug, this.emit.bind(this, RESTEvents.Debug)).on(RESTEvents.RateLimited, this.emit.bind(this, RESTEvents.RateLimited)).on(RESTEvents.InvalidRequestWarning, this.emit.bind(this, RESTEvents.InvalidRequestWarning)).on(RESTEvents.HashSweep, this.emit.bind(this, RESTEvents.HashSweep));
    this.on("newListener", (name, listener) => {
      if (name === RESTEvents.Response)
        this.requestManager.on(name, listener);
    });
    this.on("removeListener", (name, listener) => {
      if (name === RESTEvents.Response)
        this.requestManager.off(name, listener);
    });
  }
  getAgent() {
    return this.requestManager.agent;
  }
  setAgent(agent) {
    this.requestManager.setAgent(agent);
    return this;
  }
  setToken(token) {
    this.requestManager.setToken(token);
    return this;
  }
  get(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestMethod.Get });
  }
  delete(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestMethod.Delete });
  }
  post(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestMethod.Post });
  }
  put(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestMethod.Put });
  }
  patch(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestMethod.Patch });
  }
  async request(options) {
    const response = await this.raw(options);
    return parseResponse(response);
  }
  raw(options) {
    return this.requestManager.queueRequest(options);
  }
}

export { REST };
//# sourceMappingURL=REST.mjs.map
