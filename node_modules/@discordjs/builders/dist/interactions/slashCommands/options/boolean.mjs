import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase.mjs';

class SlashCommandBooleanOption extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = ApplicationCommandOptionType.Boolean;
  }
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}

export { SlashCommandBooleanOption };
//# sourceMappingURL=boolean.mjs.map
