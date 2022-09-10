import { validateMaxOptionsLength, assertReturnOfBuilder } from '../Assertions.mjs';
import { SlashCommandAttachmentOption } from '../options/attachment.mjs';
import { SlashCommandBooleanOption } from '../options/boolean.mjs';
import { SlashCommandChannelOption } from '../options/channel.mjs';
import { SlashCommandIntegerOption } from '../options/integer.mjs';
import { SlashCommandMentionableOption } from '../options/mentionable.mjs';
import { SlashCommandNumberOption } from '../options/number.mjs';
import { SlashCommandRoleOption } from '../options/role.mjs';
import { SlashCommandStringOption } from '../options/string.mjs';
import { SlashCommandUserOption } from '../options/user.mjs';

class SharedSlashCommandOptions {
  addBooleanOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandBooleanOption);
  }
  addUserOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandUserOption);
  }
  addChannelOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandChannelOption);
  }
  addRoleOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandRoleOption);
  }
  addAttachmentOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandAttachmentOption);
  }
  addMentionableOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandMentionableOption);
  }
  addStringOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandStringOption);
  }
  addIntegerOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandIntegerOption);
  }
  addNumberOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandNumberOption);
  }
  _sharedAddOptionMethod(input, Instance) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new Instance()) : input;
    assertReturnOfBuilder(result, Instance);
    options.push(result);
    return this;
  }
}

export { SharedSlashCommandOptions };
//# sourceMappingURL=SharedSlashCommandOptions.mjs.map
