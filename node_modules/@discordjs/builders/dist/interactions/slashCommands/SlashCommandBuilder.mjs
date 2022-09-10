import { mix } from 'ts-mixer';
import { validateRequiredParameters, validateLocalizationMap, validateDefaultPermission, validateDefaultMemberPermissions, validateDMPermission, validateMaxOptionsLength, assertReturnOfBuilder } from './Assertions.mjs';
import { SlashCommandSubcommandGroupBuilder, SlashCommandSubcommandBuilder } from './SlashCommandSubcommands.mjs';
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
let SlashCommandBuilder = class {
  constructor() {
    this.name = void 0;
    this.description = void 0;
    this.options = [];
    this.default_permission = void 0;
    this.default_member_permissions = void 0;
    this.dm_permission = void 0;
  }
  toJSON() {
    validateRequiredParameters(this.name, this.description, this.options);
    validateLocalizationMap(this.name_localizations);
    validateLocalizationMap(this.description_localizations);
    return {
      ...this,
      options: this.options.map((option) => option.toJSON())
    };
  }
  setDefaultPermission(value) {
    validateDefaultPermission(value);
    Reflect.set(this, "default_permission", value);
    return this;
  }
  setDefaultMemberPermissions(permissions) {
    const permissionValue = validateDefaultMemberPermissions(permissions);
    Reflect.set(this, "default_member_permissions", permissionValue);
    return this;
  }
  setDMPermission(enabled) {
    validateDMPermission(enabled);
    Reflect.set(this, "dm_permission", enabled);
    return this;
  }
  addSubcommandGroup(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandGroupBuilder()) : input;
    assertReturnOfBuilder(result, SlashCommandSubcommandGroupBuilder);
    options.push(result);
    return this;
  }
  addSubcommand(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandBuilder()) : input;
    assertReturnOfBuilder(result, SlashCommandSubcommandBuilder);
    options.push(result);
    return this;
  }
};
SlashCommandBuilder = __decorateClass([
  mix(SharedSlashCommandOptions, SharedNameAndDescription)
], SlashCommandBuilder);

export { SlashCommandBuilder };
//# sourceMappingURL=SlashCommandBuilder.mjs.map
