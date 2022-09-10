import { s } from '@sapphire/shapeshift';
import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { mix } from 'ts-mixer';
import { ApplicationCommandNumericOptionMinMaxValueMixin } from '../mixins/ApplicationCommandNumericOptionMinMaxValueMixin.mjs';
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
const numberValidator = s.number.int;
let SlashCommandIntegerOption = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = ApplicationCommandOptionType.Integer;
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
SlashCommandIntegerOption = __decorateClass([
  mix(ApplicationCommandNumericOptionMinMaxValueMixin, ApplicationCommandOptionWithChoicesAndAutocompleteMixin)
], SlashCommandIntegerOption);

export { SlashCommandIntegerOption };
//# sourceMappingURL=integer.mjs.map
