import { APIApplicationCommandAttachmentOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase';
export declare class SlashCommandAttachmentOption extends ApplicationCommandOptionBase {
    readonly type: ApplicationCommandOptionType.Attachment;
    toJSON(): APIApplicationCommandAttachmentOption;
}
//# sourceMappingURL=attachment.d.ts.map