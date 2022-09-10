function isJSONEncodable(maybeEncodable) {
  return maybeEncodable !== null && typeof maybeEncodable === "object" && "toJSON" in maybeEncodable;
}

export { isJSONEncodable };
//# sourceMappingURL=jsonEncodable.mjs.map
