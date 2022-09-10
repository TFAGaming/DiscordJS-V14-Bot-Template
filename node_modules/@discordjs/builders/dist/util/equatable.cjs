'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isEquatable(maybeEquatable) {
  return maybeEquatable !== null && typeof maybeEquatable === "object" && "equals" in maybeEquatable;
}

exports.isEquatable = isEquatable;
//# sourceMappingURL=equatable.cjs.map
