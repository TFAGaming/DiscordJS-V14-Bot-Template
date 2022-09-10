import { s } from '@sapphire/shapeshift';
import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { mix } from 'ts-mixer';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase.mjs';
import { ApplicationCommandOptionWithChoicesAndAutocompleteMixin } from '../mixins/ApplicationCommandOptionWithChoicesAndAutocompleteMixin.mjs';

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
const minLengthValidator = s.number.greaterThanOrEqual(0).lessThanOrEqual(6e3);
const maxLengthValidator = s.number.greaterThanOrEqual(1).lessThanOrEqual(6e3);
let SlashCommandStringOption = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = ApplicationCommandOptionType.String;
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
SlashCommandStringOption = __decorateClass([
  mix(ApplicationCommandOptionWithChoicesAndAutocompleteMixin)
], SlashCommandStringOption);

export { SlashCommandStringOption };
//# sourceMappingURL=string.mjs.map
