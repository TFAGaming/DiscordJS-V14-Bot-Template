import { APIApplicationCommandBooleanOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase';
export declare class SlashCommandBooleanOption extends ApplicationCommandOptionBase {
    readonly type: ApplicationCommandOptionType.Boolean;
    toJSON(): APIApplicationCommandBooleanOption;
}
//# sourceMappingURL=boolean.d.ts.map