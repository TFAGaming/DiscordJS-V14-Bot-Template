'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const v10 = require('discord-api-types/v10');
const tsMixer = require('ts-mixer');
const Assertions = require('./Assertions.cjs');
const NameAndDescription = require('./mixins/NameAndDescription.cjs');
const SharedSlashCommandOptions = require('./mixins/SharedSlashCommandOptions.cjs');

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
exports.SlashCommandSubcommandGroupBuilder = class {
  constructor() {
    this.name = void 0;
    this.description = void 0;
    this.options = [];
  }
  addSubcommand(input) {
    const { options } = this;
    Assertions.validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new exports.SlashCommandSubcommandBuilder()) : input;
    Assertions.assertReturnOfBuilder(result, exports.SlashCommandSubcommandBuilder);
    options.push(result);
    return this;
  }
  toJSON() {
    Assertions.validateRequiredParameters(this.name, this.description, this.options);
    return {
      type: v10.ApplicationCommandOptionType.SubcommandGroup,
      name: this.name,
      name_localizations: this.name_localizations,
      description: this.description,
      description_localizations: this.description_localizations,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
exports.SlashCommandSubcommandGroupBuilder = __decorateClass([
  tsMixer.mix(NameAndDescription.SharedNameAndDescription)
], exports.SlashCommandSubcommandGroupBuilder);
exports.SlashCommandSubcommandBuilder = class {
  constructor() {
    this.name = void 0;
    this.description = void 0;
    this.options = [];
  }
  toJSON() {
    Assertions.validateRequiredParameters(this.name, this.description, this.options);
    return {
      type: v10.ApplicationCommandOptionType.Subcommand,
      name: this.name,
      name_localizations: this.name_localizations,
      description: this.description,
      description_localizations: this.description_localizations,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
exports.SlashCommandSubcommandBuilder = __decorateClass([
  tsMixer.mix(NameAndDescription.SharedNameAndDescription, SharedSlashCommandOptions.SharedSlashCommandOptions)
], exports.SlashCommandSubcommandBuilder);
//# sourceMappingURL=SlashCommandSubcommands.cjs.map
