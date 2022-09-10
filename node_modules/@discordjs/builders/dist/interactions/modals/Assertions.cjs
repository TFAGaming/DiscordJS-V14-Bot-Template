'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shapeshift = require('@sapphire/shapeshift');
const ActionRow = require('../../components/ActionRow.cjs');
const Assertions$1 = require('../../components/Assertions.cjs');
const validation = require('../../util/validation.cjs');

const titleValidator = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(validation.isValidationEnabled);
const componentsValidator = shapeshift.s.instance(ActionRow.ActionRowBuilder).array.lengthGreaterThanOrEqual(1).setValidationEnabled(validation.isValidationEnabled);
function validateRequiredParameters(customId, title, components) {
  Assertions$1.customIdValidator.parse(customId);
  titleValidator.parse(title);
  componentsValidator.parse(components);
}

exports.componentsValidator = componentsValidator;
exports.titleValidator = titleValidator;
exports.validateRequiredParameters = validateRequiredParameters;
//# sourceMappingURL=Assertions.cjs.map
