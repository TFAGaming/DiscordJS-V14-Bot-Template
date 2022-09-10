import { SharedNameAndDescription } from './NameAndDescription.mjs';
import { validateRequired, validateRequiredParameters, validateLocalizationMap } from '../Assertions.mjs';

class ApplicationCommandOptionBase extends SharedNameAndDescription {
  constructor() {
    super(...arguments);
    this.required = false;
  }
  setRequired(required) {
    validateRequired(required);
    Reflect.set(this, "required", required);
    return this;
  }
  runRequiredValidations() {
    validateRequiredParameters(this.name, this.description, []);
    validateLocalizationMap(this.name_localizations);
    validateLocalizationMap(this.description_localizations);
    validateRequired(this.required);
  }
}

export { ApplicationCommandOptionBase };
//# sourceMappingURL=ApplicationCommandOptionBase.mjs.map
