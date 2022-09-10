import { DefaultRestOptions, ALLOWED_STICKER_EXTENSIONS, ALLOWED_SIZES, ALLOWED_EXTENSIONS } from './utils/constants.mjs';

class CDN {
  constructor(base = DefaultRestOptions.cdn) {
    this.base = base;
  }
  appAsset(clientId, assetHash, options) {
    return this.makeURL(`/app-assets/${clientId}/${assetHash}`, options);
  }
  appIcon(clientId, iconHash, options) {
    return this.makeURL(`/app-icons/${clientId}/${iconHash}`, options);
  }
  avatar(id, avatarHash, options) {
    return this.dynamicMakeURL(`/avatars/${id}/${avatarHash}`, avatarHash, options);
  }
  banner(id, bannerHash, options) {
    return this.dynamicMakeURL(`/banners/${id}/${bannerHash}`, bannerHash, options);
  }
  channelIcon(channelId, iconHash, options) {
    return this.makeURL(`/channel-icons/${channelId}/${iconHash}`, options);
  }
  defaultAvatar(discriminator) {
    return this.makeURL(`/embed/avatars/${discriminator}`, { extension: "png" });
  }
  discoverySplash(guildId, splashHash, options) {
    return this.makeURL(`/discovery-splashes/${guildId}/${splashHash}`, options);
  }
  emoji(emojiId, extension) {
    return this.makeURL(`/emojis/${emojiId}`, { extension });
  }
  guildMemberAvatar(guildId, userId, avatarHash, options) {
    return this.dynamicMakeURL(`/guilds/${guildId}/users/${userId}/avatars/${avatarHash}`, avatarHash, options);
  }
  guildMemberBanner(guildId, userId, bannerHash, options) {
    return this.dynamicMakeURL(`/guilds/${guildId}/users/${userId}/banner`, bannerHash, options);
  }
  icon(id, iconHash, options) {
    return this.dynamicMakeURL(`/icons/${id}/${iconHash}`, iconHash, options);
  }
  roleIcon(roleId, roleIconHash, options) {
    return this.makeURL(`/role-icons/${roleId}/${roleIconHash}`, options);
  }
  splash(guildId, splashHash, options) {
    return this.makeURL(`/splashes/${guildId}/${splashHash}`, options);
  }
  sticker(stickerId, extension) {
    return this.makeURL(`/stickers/${stickerId}`, {
      allowedExtensions: ALLOWED_STICKER_EXTENSIONS,
      extension: extension ?? "png"
    });
  }
  stickerPackBanner(bannerId, options) {
    return this.makeURL(`/app-assets/710982414301790216/store/${bannerId}`, options);
  }
  teamIcon(teamId, iconHash, options) {
    return this.makeURL(`/team-icons/${teamId}/${iconHash}`, options);
  }
  guildScheduledEventCover(scheduledEventId, coverHash, options) {
    return this.makeURL(`/guild-events/${scheduledEventId}/${coverHash}`, options);
  }
  dynamicMakeURL(route, hash, { forceStatic = false, ...options } = {}) {
    return this.makeURL(route, !forceStatic && hash.startsWith("a_") ? { ...options, extension: "gif" } : options);
  }
  makeURL(route, { allowedExtensions = ALLOWED_EXTENSIONS, extension = "webp", size } = {}) {
    extension = String(extension).toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      throw new RangeError(`Invalid extension provided: ${extension}
Must be one of: ${allowedExtensions.join(", ")}`);
    }
    if (size && !ALLOWED_SIZES.includes(size)) {
      throw new RangeError(`Invalid size provided: ${size}
Must be one of: ${ALLOWED_SIZES.join(", ")}`);
    }
    const url = new URL(`${this.base}${route}.${extension}`);
    if (size) {
      url.searchParams.set("size", String(size));
    }
    return url.toString();
  }
}

export { CDN };
//# sourceMappingURL=CDN.mjs.map
