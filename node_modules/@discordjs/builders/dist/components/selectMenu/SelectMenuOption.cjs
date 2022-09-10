'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const Assertions = require('../Assertions.cjs');

class SelectMenuOptionBuilder {
  constructor(data = {}) {
    this.data = data;
  }
  setLabel(label) {
    this.data.label = Assertions.labelValueDescriptionValidator.parse(label);
    return this;
  }
  setValue(value) {
    this.data.value = Assertions.labelValueDescriptionValidator.parse(value);
    return this;
  }
  setDescription(description) {
    this.data.description = Assertions.labelValueDescriptionValidator.parse(description);
    return this;
  }
  setDefault(isDefault = true) {
    this.data.default = Assertions.defaultValidator.parse(isDefault);
    return this;
  }
  setEmoji(emoji) {
    this.data.emoji = Assertions.emojiValidator.parse(emoji);
    return this;
  }
  toJSON() {
    Assertions.validateRequiredSelectMenuOptionParameters(this.data.label, this.data.value);
    return {
      ...this.data
    };
  }
}

exports.SelectMenuOptionBuilder = SelectMenuOptionBuilder;
//# sourceMappingURL=SelectMenuOption.cjs.map
