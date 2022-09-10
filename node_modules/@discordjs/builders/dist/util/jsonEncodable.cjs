'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isJSONEncodable(maybeEncodable) {
  return maybeEncodable !== null && typeof maybeEncodable === "object" && "toJSON" in maybeEncodable;
}

exports.isJSONEncodable = isJSONEncodable;
//# sourceMappingURL=jsonEncodable.cjs.map
