'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shapeshift = require('@sapphire/shapeshift');
const v10 = require('discord-api-types/v10');
const Assertions = require('../Assertions.cjs');

const stringPredicate = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100);
const numberPredicate = shapeshift.s.number.greaterThan(-Infinity).lessThan(Infinity);
const choicesPredicate = shapeshift.s.object({
  name: stringPredicate,
  name_localizations: Assertions.localizationMapPredicate,
  value: shapeshift.s.union(stringPredicate, numberPredicate)
}).array;
const booleanPredicate = shapeshift.s.boolean;
class ApplicationCommandOptionWithChoicesAndAutocompleteMixin {
  addChoices(...choices) {
    if (choices.length > 0 && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    choicesPredicate.parse(choices);
    if (this.choices === void 0) {
      Reflect.set(this, "choices", []);
    }
    Assertions.validateChoicesLength(choices.length, this.choices);
    for (const { name, name_localizations, value } of choices) {
      if (this.type === v10.ApplicationCommandOptionType.String) {
        stringPredicate.parse(value);
      } else {
        numberPredicate.parse(value);
      }
      this.choices.push({ name, name_localizations, value });
    }
    return this;
  }
  setChoices(...choices) {
    if (choices.length > 0 && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    choicesPredicate.parse(choices);
    Reflect.set(this, "choices", []);
    this.addChoices(...choices);
    return this;
  }
  setAutocomplete(autocomplete) {
    booleanPredicate.parse(autocomplete);
    if (autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    Reflect.set(this, "autocomplete", autocomplete);
    return this;
  }
}

exports.ApplicationCommandOptionWithChoicesAndAutocompleteMixin = ApplicationCommandOptionWithChoicesAndAutocompleteMixin;
//# sourceMappingURL=ApplicationCommandOptionWithChoicesAndAutocompleteMixin.cjs.map
