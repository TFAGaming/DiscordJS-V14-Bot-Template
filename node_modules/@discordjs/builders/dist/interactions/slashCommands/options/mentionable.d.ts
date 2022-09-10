import { APIApplicationCommandMentionableOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase';
export declare class SlashCommandMentionableOption extends ApplicationCommandOptionBase {
    readonly type: ApplicationCommandOptionType.Mentionable;
    toJSON(): APIApplicationCommandMentionableOption;
}
//# sourceMappingURL=mentionable.d.ts.map