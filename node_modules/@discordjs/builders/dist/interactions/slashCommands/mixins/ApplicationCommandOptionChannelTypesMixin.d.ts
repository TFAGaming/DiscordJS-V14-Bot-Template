import { ChannelType } from 'discord-api-types/v10';
declare const allowedChannelTypes: readonly [ChannelType.GuildText, ChannelType.GuildVoice, ChannelType.GuildCategory, ChannelType.GuildNews, ChannelType.GuildNewsThread, ChannelType.GuildPublicThread, ChannelType.GuildPrivateThread, ChannelType.GuildStageVoice];
export declare type ApplicationCommandOptionAllowedChannelTypes = typeof allowedChannelTypes[number];
export declare class ApplicationCommandOptionChannelTypesMixin {
    readonly channel_types?: ApplicationCommandOptionAllowedChannelTypes[];
    /**
     * Adds channel types to this option
     *
     * @param channelTypes - The channel types to add
     */
    addChannelTypes(...channelTypes: ApplicationCommandOptionAllowedChannelTypes[]): this;
}
export {};
//# sourceMappingURL=ApplicationCommandOptionChannelTypesMixin.d.ts.map