import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { mix } from 'ts-mixer';
import { validateMaxOptionsLength, assertReturnOfBuilder, validateRequiredParameters } from './Assertions.mjs';
import { SharedNameAndDescription } from './mixins/NameAndDescription.mjs';
import { SharedSlashCommandOptions } from './mixins/SharedSlashCommandOptions.mjs';

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
let SlashCommandSubcommandGroupBuilder = class {
  constructor() {
    this.name = void 0;
    this.description = void 0;
    this.options = [];
  }
  addSubcommand(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandBuilder()) : input;
    assertReturnOfBuilder(result, SlashCommandSubcommandBuilder);
    options.push(result);
    return this;
  }
  toJSON() {
    validateRequiredParameters(this.name, this.description, this.options);
    return {
      type: ApplicationCommandOptionType.SubcommandGroup,
      name: this.name,
      name_localizations: this.name_localizations,
      description: this.description,
      description_localizations: this.description_localizations,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
SlashCommandSubcommandGroupBuilder = __decorateClass([
  mix(SharedNameAndDescription)
], SlashCommandSubcommandGroupBuilder);
let SlashCommandSubcommandBuilder = class {
  constructor() {
    this.name = void 0;
    this.description = void 0;
    this.options = [];
  }
  toJSON() {
    validateRequiredParameters(this.name, this.description, this.options);
    return {
      type: ApplicationCommandOptionType.Subcommand,
      name: this.name,
      name_localizations: this.name_localizations,
      description: this.description,
      description_localizations: this.description_localizations,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
SlashCommandSubcommandBuilder = __decorateClass([
  mix(SharedNameAndDescription, SharedSlashCommandOptions)
], SlashCommandSubcommandBuilder);

export { SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder };
//# sourceMappingURL=SlashCommandSubcommands.mjs.map
