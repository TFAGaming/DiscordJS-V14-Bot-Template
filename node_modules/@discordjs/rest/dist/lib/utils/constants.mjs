import { APIVersion } from 'discord-api-types/v10';
import { getGlobalDispatcher } from 'undici';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const Package = require("../../../package.json");
const DefaultUserAgent = `DiscordBot (${Package.homepage}, ${Package.version})`;
const DefaultRestOptions = {
  get agent() {
    return getGlobalDispatcher();
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
  version: APIVersion,
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

export { ALLOWED_EXTENSIONS, ALLOWED_SIZES, ALLOWED_STICKER_EXTENSIONS, DefaultRestOptions, DefaultUserAgent, RESTEvents };
//# sourceMappingURL=constants.mjs.map
