'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const Assertions = require('./Assertions.cjs');
const normalizeArray = require('../../util/normalizeArray.cjs');

class EmbedBuilder {
  constructor(data = {}) {
    this.data = { ...data };
    if (data.timestamp)
      this.data.timestamp = new Date(data.timestamp).toISOString();
  }
  addFields(...fields) {
    fields = normalizeArray.normalizeArray(fields);
    Assertions.validateFieldLength(fields.length, this.data.fields);
    Assertions.embedFieldsArrayPredicate.parse(fields);
    if (this.data.fields)
      this.data.fields.push(...fields);
    else
      this.data.fields = fields;
    return this;
  }
  spliceFields(index, deleteCount, ...fields) {
    Assertions.validateFieldLength(fields.length - deleteCount, this.data.fields);
    Assertions.embedFieldsArrayPredicate.parse(fields);
    if (this.data.fields)
      this.data.fields.splice(index, deleteCount, ...fields);
    else
      this.data.fields = fields;
    return this;
  }
  setFields(...fields) {
    this.spliceFields(0, this.data.fields?.length ?? 0, ...normalizeArray.normalizeArray(fields));
    return this;
  }
  setAuthor(options) {
    if (options === null) {
      this.data.author = void 0;
      return this;
    }
    Assertions.embedAuthorPredicate.parse(options);
    this.data.author = { name: options.name, url: options.url, icon_url: options.iconURL };
    return this;
  }
  setColor(color) {
    Assertions.colorPredicate.parse(color);
    if (Array.isArray(color)) {
      const [red, green, blue] = color;
      this.data.color = (red << 16) + (green << 8) + blue;
      return this;
    }
    this.data.color = color ?? void 0;
    return this;
  }
  setDescription(description) {
    Assertions.descriptionPredicate.parse(description);
    this.data.description = description ?? void 0;
    return this;
  }
  setFooter(options) {
    if (options === null) {
      this.data.footer = void 0;
      return this;
    }
    Assertions.embedFooterPredicate.parse(options);
    this.data.footer = { text: options.text, icon_url: options.iconURL };
    return this;
  }
  setImage(url) {
    Assertions.imageURLPredicate.parse(url);
    this.data.image = url ? { url } : void 0;
    return this;
  }
  setThumbnail(url) {
    Assertions.imageURLPredicate.parse(url);
    this.data.thumbnail = url ? { url } : void 0;
    return this;
  }
  setTimestamp(timestamp = Date.now()) {
    Assertions.timestampPredicate.parse(timestamp);
    this.data.timestamp = timestamp ? new Date(timestamp).toISOString() : void 0;
    return this;
  }
  setTitle(title) {
    Assertions.titlePredicate.parse(title);
    this.data.title = title ?? void 0;
    return this;
  }
  setURL(url) {
    Assertions.urlPredicate.parse(url);
    this.data.url = url ?? void 0;
    return this;
  }
  toJSON() {
    return { ...this.data };
  }
}

exports.EmbedBuilder = EmbedBuilder;
//# sourceMappingURL=Embed.cjs.map
