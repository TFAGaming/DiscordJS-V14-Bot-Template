'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shapeshift = require('@sapphire/shapeshift');
const v10 = require('discord-api-types/v10');
const SelectMenuOption = require('./selectMenu/SelectMenuOption.cjs');
const validation = require('../util/validation.cjs');

const customIdValidator = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(validation.isValidationEnabled);
const emojiValidator = shapeshift.s.object({
  id: shapeshift.s.string,
  name: shapeshift.s.string,
  animated: shapeshift.s.boolean
}).partial.strict.setValidationEnabled(validation.isValidationEnabled);
const disabledValidator = shapeshift.s.boolean;
const buttonLabelValidator = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(80).setValidationEnabled(validation.isValidationEnabled);
const buttonStyleValidator = shapeshift.s.nativeEnum(v10.ButtonStyle);
const placeholderValidator = shapeshift.s.string.lengthLessThanOrEqual(150).setValidationEnabled(validation.isValidationEnabled);
const minMaxValidator = shapeshift.s.number.int.greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(validation.isValidationEnabled);
const labelValueDescriptionValidator = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(validation.isValidationEnabled);
const jsonOptionValidator = shapeshift.s.object({
  label: labelValueDescriptionValidator,
  value: labelValueDescriptionValidator,
  description: labelValueDescriptionValidator.optional,
  emoji: emojiValidator.optional,
  default: shapeshift.s.boolean.optional
}).setValidationEnabled(validation.isValidationEnabled);
const optionValidator = shapeshift.s.instance(SelectMenuOption.SelectMenuOptionBuilder).setValidationEnabled(validation.isValidationEnabled);
const optionsValidator = optionValidator.array.lengthGreaterThanOrEqual(0).setValidationEnabled(validation.isValidationEnabled);
const optionsLengthValidator = shapeshift.s.number.int.greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(validation.isValidationEnabled);
function validateRequiredSelectMenuParameters(options, customId) {
  customIdValidator.parse(customId);
  optionsValidator.parse(options);
}
const defaultValidator = shapeshift.s.boolean;
function validateRequiredSelectMenuOptionParameters(label, value) {
  labelValueDescriptionValidator.parse(label);
  labelValueDescriptionValidator.parse(value);
}
const urlValidator = shapeshift.s.string.url({
  allowedProtocols: ["http:", "https:", "discord:"]
}).setValidationEnabled(validation.isValidationEnabled);
function validateRequiredButtonParameters(style, label, emoji, customId, url) {
  if (url && customId) {
    throw new RangeError("URL and custom id are mutually exclusive");
  }
  if (!label && !emoji) {
    throw new RangeError("Buttons must have a label and/or an emoji");
  }
  if (style === v10.ButtonStyle.Link) {
    if (!url) {
      throw new RangeError("Link buttons must have a url");
    }
  } else if (url) {
    throw new RangeError("Non-link buttons cannot have a url");
  }
}

exports.buttonLabelValidator = buttonLabelValidator;
exports.buttonStyleValidator = buttonStyleValidator;
exports.customIdValidator = customIdValidator;
exports.defaultValidator = defaultValidator;
exports.disabledValidator = disabledValidator;
exports.emojiValidator = emojiValidator;
exports.jsonOptionValidator = jsonOptionValidator;
exports.labelValueDescriptionValidator = labelValueDescriptionValidator;
exports.minMaxValidator = minMaxValidator;
exports.optionValidator = optionValidator;
exports.optionsLengthValidator = optionsLengthValidator;
exports.optionsValidator = optionsValidator;
exports.placeholderValidator = placeholderValidator;
exports.urlValidator = urlValidator;
exports.validateRequiredButtonParameters = validateRequiredButtonParameters;
exports.validateRequiredSelectMenuOptionParameters = validateRequiredSelectMenuOptionParameters;
exports.validateRequiredSelectMenuParameters = validateRequiredSelectMenuParameters;
//# sourceMappingURL=Assertions.cjs.map
