'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const Assertions = require('../Assertions.cjs');
const attachment = require('../options/attachment.cjs');
const boolean = require('../options/boolean.cjs');
const channel = require('../options/channel.cjs');
const integer = require('../options/integer.cjs');
const mentionable = require('../options/mentionable.cjs');
const number = require('../options/number.cjs');
const role = require('../options/role.cjs');
const string = require('../options/string.cjs');
const user = require('../options/user.cjs');

class SharedSlashCommandOptions {
  addBooleanOption(input) {
    return this._sharedAddOptionMethod(input, boolean.SlashCommandBooleanOption);
  }
  addUserOption(input) {
    return this._sharedAddOptionMethod(input, user.SlashCommandUserOption);
  }
  addChannelOption(input) {
    return this._sharedAddOptionMethod(input, channel.SlashCommandChannelOption);
  }
  addRoleOption(input) {
    return this._sharedAddOptionMethod(input, role.SlashCommandRoleOption);
  }
  addAttachmentOption(input) {
    return this._sharedAddOptionMethod(input, attachment.SlashCommandAttachmentOption);
  }
  addMentionableOption(input) {
    return this._sharedAddOptionMethod(input, mentionable.SlashCommandMentionableOption);
  }
  addStringOption(input) {
    return this._sharedAddOptionMethod(input, string.SlashCommandStringOption);
  }
  addIntegerOption(input) {
    return this._sharedAddOptionMethod(input, integer.SlashCommandIntegerOption);
  }
  addNumberOption(input) {
    return this._sharedAddOptionMethod(input, number.SlashCommandNumberOption);
  }
  _sharedAddOptionMethod(input, Instance) {
    const { options } = this;
    Assertions.validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new Instance()) : input;
    Assertions.assertReturnOfBuilder(result, Instance);
    options.push(result);
    return this;
  }
}

exports.SharedSlashCommandOptions = SharedSlashCommandOptions;
//# sourceMappingURL=SharedSlashCommandOptions.cjs.map
