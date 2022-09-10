import { s } from '@sapphire/shapeshift';
import { ChannelType } from 'discord-api-types/v10';

const allowedChannelTypes = [
  ChannelType.GuildText,
  ChannelType.GuildVoice,
  ChannelType.GuildCategory,
  ChannelType.GuildNews,
  ChannelType.GuildNewsThread,
  ChannelType.GuildPublicThread,
  ChannelType.GuildPrivateThread,
  ChannelType.GuildStageVoice
];
const channelTypesPredicate = s.array(s.union(...allowedChannelTypes.map((type) => s.literal(type))));
class ApplicationCommandOptionChannelTypesMixin {
  addChannelTypes(...channelTypes) {
    if (this.channel_types === void 0) {
      Reflect.set(this, "channel_types", []);
    }
    this.channel_types.push(...channelTypesPredicate.parse(channelTypes));
    return this;
  }
}

export { ApplicationCommandOptionChannelTypesMixin };
//# sourceMappingURL=ApplicationCommandOptionChannelTypesMixin.mjs.map
