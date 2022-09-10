import { APIApplicationCommandRoleOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase';
export declare class SlashCommandRoleOption extends ApplicationCommandOptionBase {
    readonly type: ApplicationCommandOptionType.Role;
    toJSON(): APIApplicationCommandRoleOption;
}
//# sourceMappingURL=role.d.ts.map