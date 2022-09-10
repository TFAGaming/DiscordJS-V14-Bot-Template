'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const v10 = require('discord-api-types/v10');
const undici = require('undici');

const Package = require("../../../package.json");
const DefaultUserAgent = `DiscordBot (${Package.homepage}, ${Package.version})`;
const DefaultRestOptions = {
  get agent() {
    return undici.getGlobalDispatcher();
  },
  api: "https://discord.com/api",
  authPrefix: "Bot",
  cdn: "https://cdn.discordapp.com",
  headers: {},
  invalidRequestWarningInterval: 0,
  globalRequestsPerSecond: 50,
  offset: 50,
  rejectOnRateLimit: null,
  retries: 3,
  timeout: 15e3,
  userAgentAppendix: `Node.js ${process.version}`,
  version: v10.APIVersion,
  hashSweepInterval: 144e5,
  hashLifetime: 864e5,
  handlerSweepInterval: 36e5
};
var RESTEvents = /* @__PURE__ */ ((RESTEvents2) => {
  RESTEvents2["Debug"] = "restDebug";
  RESTEvents2["InvalidRequestWarning"] = "invalidRequestWarning";
  RESTEvents2["RateLimited"] = "rateLimited";
  RESTEvents2["Response"] = "response";
  RESTEvents2["HashSweep"] = "hashSweep";
  RESTEvents2["HandlerSweep"] = "handlerSweep";
  return RESTEvents2;
})(RESTEvents || {});
const ALLOWED_EXTENSIONS = ["webp", "png", "jpg", "jpeg", "gif"];
const ALLOWED_STICKER_EXTENSIONS = ["png", "json"];
const ALLOWED_SIZES = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];

exports.ALLOWED_EXTENSIONS = ALLOWED_EXTENSIONS;
exports.ALLOWED_SIZES = ALLOWED_SIZES;
exports.ALLOWED_STICKER_EXTENSIONS = ALLOWED_STICKER_EXTENSIONS;
exports.DefaultRestOptions = DefaultRestOptions;
exports.DefaultUserAgent = DefaultUserAgent;
exports.RESTEvents = RESTEvents;
//# sourceMappingURL=constants.cjs.map
