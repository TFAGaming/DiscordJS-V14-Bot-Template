import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase.mjs';

class SlashCommandRoleOption extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = ApplicationCommandOptionType.Role;
  }
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}

export { SlashCommandRoleOption };
//# sourceMappingURL=role.mjs.map
