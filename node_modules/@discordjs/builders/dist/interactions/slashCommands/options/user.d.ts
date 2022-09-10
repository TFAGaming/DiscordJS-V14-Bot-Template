import { APIApplicationCommandUserOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase';
export declare class SlashCommandUserOption extends ApplicationCommandOptionBase {
    readonly type: ApplicationCommandOptionType.User;
    toJSON(): APIApplicationCommandUserOption;
}
//# sourceMappingURL=user.d.ts.map