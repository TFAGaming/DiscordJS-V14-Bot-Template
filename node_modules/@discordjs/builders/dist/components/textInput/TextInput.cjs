'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const v10 = require('discord-api-types/v10');
const isEqual = require('fast-deep-equal');
const Assertions$1 = require('./Assertions.cjs');
const jsonEncodable = require('../../util/jsonEncodable.cjs');
const Assertions = require('../Assertions.cjs');
const Component = require('../Component.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);

class TextInputBuilder extends Component.ComponentBuilder {
  constructor(data) {
    super({ type: v10.ComponentType.TextInput, ...data });
  }
  setCustomId(customId) {
    this.data.custom_id = Assertions.customIdValidator.parse(customId);
    return this;
  }
  setLabel(label) {
    this.data.label = Assertions$1.labelValidator.parse(label);
    return this;
  }
  setStyle(style) {
    this.data.style = Assertions$1.textInputStyleValidator.parse(style);
    return this;
  }
  setMinLength(minLength) {
    this.data.min_length = Assertions$1.minLengthValidator.parse(minLength);
    return this;
  }
  setMaxLength(maxLength) {
    this.data.max_length = Assertions$1.maxLengthValidator.parse(maxLength);
    return this;
  }
  setPlaceholder(placeholder) {
    this.data.placeholder = Assertions$1.placeholderValidator.parse(placeholder);
    return this;
  }
  setValue(value) {
    this.data.value = Assertions$1.valueValidator.parse(value);
    return this;
  }
  setRequired(required = true) {
    this.data.required = Assertions$1.requiredValidator.parse(required);
    return this;
  }
  toJSON() {
    Assertions$1.validateRequiredParameters(this.data.custom_id, this.data.style, this.data.label);
    return {
      ...this.data
    };
  }
  equals(other) {
    if (jsonEncodable.isJSONEncodable(other)) {
      return isEqual__default(other.toJSON(), this.data);
    }
    return isEqual__default(other, this.data);
  }
}

exports.TextInputBuilder = TextInputBuilder;
//# sourceMappingURL=TextInput.cjs.map
