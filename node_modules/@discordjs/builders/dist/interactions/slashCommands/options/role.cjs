'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const v10 = require('discord-api-types/v10');
const ApplicationCommandOptionBase = require('../mixins/ApplicationCommandOptionBase.cjs');

class SlashCommandRoleOption extends ApplicationCommandOptionBase.ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = v10.ApplicationCommandOptionType.Role;
  }
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}

exports.SlashCommandRoleOption = SlashCommandRoleOption;
//# sourceMappingURL=role.cjs.map
