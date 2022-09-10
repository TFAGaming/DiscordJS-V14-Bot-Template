'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shapeshift = require('@sapphire/shapeshift');
const v10 = require('discord-api-types/v10');
const validation = require('../../util/validation.cjs');
const Assertions$1 = require('../Assertions.cjs');

const textInputStyleValidator = shapeshift.s.nativeEnum(v10.TextInputStyle);
const minLengthValidator = shapeshift.s.number.int.greaterThanOrEqual(0).lessThanOrEqual(4e3).setValidationEnabled(validation.isValidationEnabled);
const maxLengthValidator = shapeshift.s.number.int.greaterThanOrEqual(1).lessThanOrEqual(4e3).setValidationEnabled(validation.isValidationEnabled);
const requiredValidator = shapeshift.s.boolean;
const valueValidator = shapeshift.s.string.lengthLessThanOrEqual(4e3).setValidationEnabled(validation.isValidationEnabled);
const placeholderValidator = shapeshift.s.string.lengthLessThanOrEqual(100).setValidationEnabled(validation.isValidationEnabled);
const labelValidator = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(validation.isValidationEnabled);
function validateRequiredParameters(customId, style, label) {
  Assertions$1.customIdValidator.parse(customId);
  textInputStyleValidator.parse(style);
  labelValidator.parse(label);
}

exports.labelValidator = labelValidator;
exports.maxLengthValidator = maxLengthValidator;
exports.minLengthValidator = minLengthValidator;
exports.placeholderValidator = placeholderValidator;
exports.requiredValidator = requiredValidator;
exports.textInputStyleValidator = textInputStyleValidator;
exports.validateRequiredParameters = validateRequiredParameters;
exports.valueValidator = valueValidator;
//# sourceMappingURL=Assertions.cjs.map
