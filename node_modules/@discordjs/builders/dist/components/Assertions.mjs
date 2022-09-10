import { s } from '@sapphire/shapeshift';
import { ButtonStyle } from 'discord-api-types/v10';
import { SelectMenuOptionBuilder } from './selectMenu/SelectMenuOption.mjs';
import { isValidationEnabled } from '../util/validation.mjs';

const customIdValidator = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
const emojiValidator = s.object({
  id: s.string,
  name: s.string,
  animated: s.boolean
}).partial.strict.setValidationEnabled(isValidationEnabled);
const disabledValidator = s.boolean;
const buttonLabelValidator = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(80).setValidationEnabled(isValidationEnabled);
const buttonStyleValidator = s.nativeEnum(ButtonStyle);
const placeholderValidator = s.string.lengthLessThanOrEqual(150).setValidationEnabled(isValidationEnabled);
const minMaxValidator = s.number.int.greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
const labelValueDescriptionValidator = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
const jsonOptionValidator = s.object({
  label: labelValueDescriptionValidator,
  value: labelValueDescriptionValidator,
  description: labelValueDescriptionValidator.optional,
  emoji: emojiValidator.optional,
  default: s.boolean.optional
}).setValidationEnabled(isValidationEnabled);
const optionValidator = s.instance(SelectMenuOptionBuilder).setValidationEnabled(isValidationEnabled);
const optionsValidator = optionValidator.array.lengthGreaterThanOrEqual(0).setValidationEnabled(isValidationEnabled);
const optionsLengthValidator = s.number.int.greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateRequiredSelectMenuParameters(options, customId) {
  customIdValidator.parse(customId);
  optionsValidator.parse(options);
}
const defaultValidator = s.boolean;
function validateRequiredSelectMenuOptionParameters(label, value) {
  labelValueDescriptionValidator.parse(label);
  labelValueDescriptionValidator.parse(value);
}
const urlValidator = s.string.url({
  allowedProtocols: ["http:", "https:", "discord:"]
}).setValidationEnabled(isValidationEnabled);
function validateRequiredButtonParameters(style, label, emoji, customId, url) {
  if (url && customId) {
    throw new RangeError("URL and custom id are mutually exclusive");
  }
  if (!label && !emoji) {
    throw new RangeError("Buttons must have a label and/or an emoji");
  }
  if (style === ButtonStyle.Link) {
    if (!url) {
      throw new RangeError("Link buttons must have a url");
    }
  } else if (url) {
    throw new RangeError("Non-link buttons cannot have a url");
  }
}

export { buttonLabelValidator, buttonStyleValidator, customIdValidator, defaultValidator, disabledValidator, emojiValidator, jsonOptionValidator, labelValueDescriptionValidator, minMaxValidator, optionValidator, optionsLengthValidator, optionsValidator, placeholderValidator, urlValidator, validateRequiredButtonParameters, validateRequiredSelectMenuOptionParameters, validateRequiredSelectMenuParameters };
//# sourceMappingURL=Assertions.mjs.map
