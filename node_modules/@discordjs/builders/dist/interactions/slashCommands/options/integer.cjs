'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shapeshift = require('@sapphire/shapeshift');
const v10 = require('discord-api-types/v10');
const tsMixer = require('ts-mixer');
const ApplicationCommandNumericOptionMinMaxValueMixin = require('../mixins/ApplicationCommandNumericOptionMinMaxValueMixin.cjs');
const ApplicationCommandOptionBase = require('../mixins/ApplicationCommandOptionBase.cjs');
const ApplicationCommandOptionWithChoicesAndAutocompleteMixin = require('../mixins/ApplicationCommandOptionWithChoicesAndAutocompleteMixin.cjs');

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
const numberValidator = shapeshift.s.number.int;
exports.SlashCommandIntegerOption = class extends ApplicationCommandOptionBase.ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = v10.ApplicationCommandOptionType.Integer;
  }
  setMaxValue(max) {
    numberValidator.parse(max);
    Reflect.set(this, "max_value", max);
    return this;
  }
  setMinValue(min) {
    numberValidator.parse(min);
    Reflect.set(this, "min_value", min);
    return this;
  }
  toJSON() {
    this.runRequiredValidations();
    if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    return { ...this };
  }
};
exports.SlashCommandIntegerOption = __decorateClass([
  tsMixer.mix(ApplicationCommandNumericOptionMinMaxValueMixin.ApplicationCommandNumericOptionMinMaxValueMixin, ApplicationCommandOptionWithChoicesAndAutocompleteMixin.ApplicationCommandOptionWithChoicesAndAutocompleteMixin)
], exports.SlashCommandIntegerOption);
//# sourceMappingURL=integer.cjs.map
