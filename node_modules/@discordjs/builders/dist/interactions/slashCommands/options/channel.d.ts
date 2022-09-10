import { APIApplicationCommandChannelOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase';
import { ApplicationCommandOptionChannelTypesMixin } from '../mixins/ApplicationCommandOptionChannelTypesMixin';
export declare class SlashCommandChannelOption extends ApplicationCommandOptionBase {
    readonly type: ApplicationCommandOptionType.Channel;
    toJSON(): APIApplicationCommandChannelOption;
}
export interface SlashCommandChannelOption extends ApplicationCommandOptionChannelTypesMixin {
}
//# sourceMappingURL=channel.d.ts.map