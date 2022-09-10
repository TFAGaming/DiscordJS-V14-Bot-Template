import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase.mjs';

class SlashCommandMentionableOption extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = ApplicationCommandOptionType.Mentionable;
  }
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}

export { SlashCommandMentionableOption };
//# sourceMappingURL=mentionable.mjs.map
