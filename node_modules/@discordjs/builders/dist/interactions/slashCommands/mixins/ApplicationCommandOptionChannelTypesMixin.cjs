'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shapeshift = require('@sapphire/shapeshift');
const v10 = require('discord-api-types/v10');

const allowedChannelTypes = [
  v10.ChannelType.GuildText,
  v10.ChannelType.GuildVoice,
  v10.ChannelType.GuildCategory,
  v10.ChannelType.GuildNews,
  v10.ChannelType.GuildNewsThread,
  v10.ChannelType.GuildPublicThread,
  v10.ChannelType.GuildPrivateThread,
  v10.ChannelType.GuildStageVoice
];
const channelTypesPredicate = shapeshift.s.array(shapeshift.s.union(...allowedChannelTypes.map((type) => shapeshift.s.literal(type))));
class ApplicationCommandOptionChannelTypesMixin {
  addChannelTypes(...channelTypes) {
    if (this.channel_types === void 0) {
      Reflect.set(this, "channel_types", []);
    }
    this.channel_types.push(...channelTypesPredicate.parse(channelTypes));
    return this;
  }
}

exports.ApplicationCommandOptionChannelTypesMixin = ApplicationCommandOptionChannelTypesMixin;
//# sourceMappingURL=ApplicationCommandOptionChannelTypesMixin.cjs.map
