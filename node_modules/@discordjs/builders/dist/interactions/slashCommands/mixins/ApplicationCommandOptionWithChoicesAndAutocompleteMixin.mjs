import { s } from '@sapphire/shapeshift';
import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { localizationMapPredicate, validateChoicesLength } from '../Assertions.mjs';

const stringPredicate = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100);
const numberPredicate = s.number.greaterThan(-Infinity).lessThan(Infinity);
const choicesPredicate = s.object({
  name: stringPredicate,
  name_localizations: localizationMapPredicate,
  value: s.union(stringPredicate, numberPredicate)
}).array;
const booleanPredicate = s.boolean;
class ApplicationCommandOptionWithChoicesAndAutocompleteMixin {
  addChoices(...choices) {
    if (choices.length > 0 && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    choicesPredicate.parse(choices);
    if (this.choices === void 0) {
      Reflect.set(this, "choices", []);
    }
    validateChoicesLength(choices.length, this.choices);
    for (const { name, name_localizations, value } of choices) {
      if (this.type === ApplicationCommandOptionType.String) {
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

export { ApplicationCommandOptionWithChoicesAndAutocompleteMixin };
//# sourceMappingURL=ApplicationCommandOptionWithChoicesAndAutocompleteMixin.mjs.map
