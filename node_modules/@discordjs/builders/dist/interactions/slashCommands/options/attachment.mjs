import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase.mjs';

class SlashCommandAttachmentOption extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = ApplicationCommandOptionType.Attachment;
  }
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}

export { SlashCommandAttachmentOption };
//# sourceMappingURL=attachment.mjs.map
