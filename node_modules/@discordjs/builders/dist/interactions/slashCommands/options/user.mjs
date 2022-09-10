import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase.mjs';

class SlashCommandUserOption extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = ApplicationCommandOptionType.User;
  }
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}

export { SlashCommandUserOption };
//# sourceMappingURL=user.mjs.map
