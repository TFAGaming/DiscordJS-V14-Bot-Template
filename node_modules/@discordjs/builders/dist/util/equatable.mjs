function isEquatable(maybeEquatable) {
  return maybeEquatable !== null && typeof maybeEquatable === "object" && "equals" in maybeEquatable;
}

export { isEquatable };
//# sourceMappingURL=equatable.mjs.map
