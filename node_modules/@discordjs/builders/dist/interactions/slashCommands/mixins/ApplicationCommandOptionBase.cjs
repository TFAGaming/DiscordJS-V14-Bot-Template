'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const NameAndDescription = require('./NameAndDescription.cjs');
const Assertions = require('../Assertions.cjs');

class ApplicationCommandOptionBase extends NameAndDescription.SharedNameAndDescription {
  constructor() {
    super(...arguments);
    this.required = false;
  }
  setRequired(required) {
    Assertions.validateRequired(required);
    Reflect.set(this, "required", required);
    return this;
  }
  runRequiredValidations() {
    Assertions.validateRequiredParameters(this.name, this.description, []);
    Assertions.validateLocalizationMap(this.name_localizations);
    Assertions.validateLocalizationMap(this.description_localizations);
    Assertions.validateRequired(this.required);
  }
}

exports.ApplicationCommandOptionBase = ApplicationCommandOptionBase;
//# sourceMappingURL=ApplicationCommandOptionBase.cjs.map
