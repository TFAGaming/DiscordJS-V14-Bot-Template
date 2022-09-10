'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const node_events = require('node:events');
const CDN = require('./CDN.cjs');
const RequestManager = require('./RequestManager.cjs');
const constants = require('./utils/constants.cjs');
const utils = require('./utils/utils.cjs');

class REST extends node_events.EventEmitter {
  constructor(options = {}) {
    super();
    this.cdn = new CDN.CDN(options.cdn ?? constants.DefaultRestOptions.cdn);
    this.requestManager = new RequestManager.RequestManager(options).on(constants.RESTEvents.Debug, this.emit.bind(this, constants.RESTEvents.Debug)).on(constants.RESTEvents.RateLimited, this.emit.bind(this, constants.RESTEvents.RateLimited)).on(constants.RESTEvents.InvalidRequestWarning, this.emit.bind(this, constants.RESTEvents.InvalidRequestWarning)).on(constants.RESTEvents.HashSweep, this.emit.bind(this, constants.RESTEvents.HashSweep));
    this.on("newListener", (name, listener) => {
      if (name === constants.RESTEvents.Response)
        this.requestManager.on(name, listener);
    });
    this.on("removeListener", (name, listener) => {
      if (name === constants.RESTEvents.Response)
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
    return this.request({ ...options, fullRoute, method: RequestManager.RequestMethod.Get });
  }
  delete(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestManager.RequestMethod.Delete });
  }
  post(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestManager.RequestMethod.Post });
  }
  put(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestManager.RequestMethod.Put });
  }
  patch(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: RequestManager.RequestMethod.Patch });
  }
  async request(options) {
    const response = await this.raw(options);
    return utils.parseResponse(response);
  }
  raw(options) {
    return this.requestManager.queueRequest(options);
  }
}

exports.REST = REST;
//# sourceMappingURL=REST.cjs.map
