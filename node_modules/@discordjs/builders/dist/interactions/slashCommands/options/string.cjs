'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shapeshift = require('@sapphire/shapeshift');
const v10 = require('discord-api-types/v10');
const tsMixer = require('ts-mixer');
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
const minLengthValidator = shapeshift.s.number.greaterThanOrEqual(0).lessThanOrEqual(6e3);
const maxLengthValidator = shapeshift.s.number.greaterThanOrEqual(1).lessThanOrEqual(6e3);
exports.SlashCommandStringOption = class extends ApplicationCommandOptionBase.ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = v10.ApplicationCommandOptionType.String;
  }
  setMaxLength(max) {
    maxLengthValidator.parse(max);
    Reflect.set(this, "max_length", max);
    return this;
  }
  setMinLength(min) {
    minLengthValidator.parse(min);
    Reflect.set(this, "min_length", min);
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
exports.SlashCommandStringOption = __decorateClass([
  tsMixer.mix(ApplicationCommandOptionWithChoicesAndAutocompleteMixin.ApplicationCommandOptionWithChoicesAndAutocompleteMixin)
], exports.SlashCommandStringOption);
//# sourceMappingURL=string.cjs.map
