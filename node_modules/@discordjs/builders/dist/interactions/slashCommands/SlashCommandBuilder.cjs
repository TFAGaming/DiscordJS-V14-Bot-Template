'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const tsMixer = require('ts-mixer');
const Assertions = require('./Assertions.cjs');
const SlashCommandSubcommands = require('./SlashCommandSubcommands.cjs');
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
exports.SlashCommandBuilder = class {
  constructor() {
    this.name = void 0;
    this.description = void 0;
    this.options = [];
    this.default_permission = void 0;
    this.default_member_permissions = void 0;
    this.dm_permission = void 0;
  }
  toJSON() {
    Assertions.validateRequiredParameters(this.name, this.description, this.options);
    Assertions.validateLocalizationMap(this.name_localizations);
    Assertions.validateLocalizationMap(this.description_localizations);
    return {
      ...this,
      options: this.options.map((option) => option.toJSON())
    };
  }
  setDefaultPermission(value) {
    Assertions.validateDefaultPermission(value);
    Reflect.set(this, "default_permission", value);
    return this;
  }
  setDefaultMemberPermissions(permissions) {
    const permissionValue = Assertions.validateDefaultMemberPermissions(permissions);
    Reflect.set(this, "default_member_permissions", permissionValue);
    return this;
  }
  setDMPermission(enabled) {
    Assertions.validateDMPermission(enabled);
    Reflect.set(this, "dm_permission", enabled);
    return this;
  }
  addSubcommandGroup(input) {
    const { options } = this;
    Assertions.validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommands.SlashCommandSubcommandGroupBuilder()) : input;
    Assertions.assertReturnOfBuilder(result, SlashCommandSubcommands.SlashCommandSubcommandGroupBuilder);
    options.push(result);
    return this;
  }
  addSubcommand(input) {
    const { options } = this;
    Assertions.validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommands.SlashCommandSubcommandBuilder()) : input;
    Assertions.assertReturnOfBuilder(result, SlashCommandSubcommands.SlashCommandSubcommandBuilder);
    options.push(result);
    return this;
  }
};
exports.SlashCommandBuilder = __decorateClass([
  tsMixer.mix(SharedSlashCommandOptions.SharedSlashCommandOptions, NameAndDescription.SharedNameAndDescription)
], exports.SlashCommandBuilder);
//# sourceMappingURL=SlashCommandBuilder.cjs.map
