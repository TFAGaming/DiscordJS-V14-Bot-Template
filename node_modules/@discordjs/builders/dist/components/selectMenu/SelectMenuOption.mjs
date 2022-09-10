import { labelValueDescriptionValidator, defaultValidator, emojiValidator, validateRequiredSelectMenuOptionParameters } from '../Assertions.mjs';

class SelectMenuOptionBuilder {
  constructor(data = {}) {
    this.data = data;
  }
  setLabel(label) {
    this.data.label = labelValueDescriptionValidator.parse(label);
    return this;
  }
  setValue(value) {
    this.data.value = labelValueDescriptionValidator.parse(value);
    return this;
  }
  setDescription(description) {
    this.data.description = labelValueDescriptionValidator.parse(description);
    return this;
  }
  setDefault(isDefault = true) {
    this.data.default = defaultValidator.parse(isDefault);
    return this;
  }
  setEmoji(emoji) {
    this.data.emoji = emojiValidator.parse(emoji);
    return this;
  }
  toJSON() {
    validateRequiredSelectMenuOptionParameters(this.data.label, this.data.value);
    return {
      ...this.data
    };
  }
}

export { SelectMenuOptionBuilder };
//# sourceMappingURL=SelectMenuOption.mjs.map
