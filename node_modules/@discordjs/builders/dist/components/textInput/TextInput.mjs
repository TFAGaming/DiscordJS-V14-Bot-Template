import { ComponentType } from 'discord-api-types/v10';
import isEqual from 'fast-deep-equal';
import { labelValidator, textInputStyleValidator, minLengthValidator, maxLengthValidator, placeholderValidator, valueValidator, requiredValidator, validateRequiredParameters } from './Assertions.mjs';
import { isJSONEncodable } from '../../util/jsonEncodable.mjs';
import { customIdValidator } from '../Assertions.mjs';
import { ComponentBuilder } from '../Component.mjs';

class TextInputBuilder extends ComponentBuilder {
  constructor(data) {
    super({ type: ComponentType.TextInput, ...data });
  }
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  setLabel(label) {
    this.data.label = labelValidator.parse(label);
    return this;
  }
  setStyle(style) {
    this.data.style = textInputStyleValidator.parse(style);
    return this;
  }
  setMinLength(minLength) {
    this.data.min_length = minLengthValidator.parse(minLength);
    return this;
  }
  setMaxLength(maxLength) {
    this.data.max_length = maxLengthValidator.parse(maxLength);
    return this;
  }
  setPlaceholder(placeholder) {
    this.data.placeholder = placeholderValidator.parse(placeholder);
    return this;
  }
  setValue(value) {
    this.data.value = valueValidator.parse(value);
    return this;
  }
  setRequired(required = true) {
    this.data.required = requiredValidator.parse(required);
    return this;
  }
  toJSON() {
    validateRequiredParameters(this.data.custom_id, this.data.style, this.data.label);
    return {
      ...this.data
    };
  }
  equals(other) {
    if (isJSONEncodable(other)) {
      return isEqual(other.toJSON(), this.data);
    }
    return isEqual(other, this.data);
  }
}

export { TextInputBuilder };
//# sourceMappingURL=TextInput.mjs.map
