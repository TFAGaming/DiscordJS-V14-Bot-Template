function codeBlock(language, content) {
  return typeof content === "undefined" ? `\`\`\`
${language}
\`\`\`` : `\`\`\`${language}
${content}
\`\`\``;
}
function inlineCode(content) {
  return `\`${content}\``;
}
function italic(content) {
  return `_${content}_`;
}
function bold(content) {
  return `**${content}**`;
}
function underscore(content) {
  return `__${content}__`;
}
function strikethrough(content) {
  return `~~${content}~~`;
}
function quote(content) {
  return `> ${content}`;
}
function blockQuote(content) {
  return `>>> ${content}`;
}
function hideLinkEmbed(url) {
  return `<${url}>`;
}
function hyperlink(content, url, title) {
  return title ? `[${content}](${url} "${title}")` : `[${content}](${url})`;
}
function spoiler(content) {
  return `||${content}||`;
}
function userMention(userId) {
  return `<@${userId}>`;
}
function channelMention(channelId) {
  return `<#${channelId}>`;
}
function roleMention(roleId) {
  return `<@&${roleId}>`;
}
function formatEmoji(emojiId, animated = false) {
  return `<${animated ? "a" : ""}:_:${emojiId}>`;
}
function channelLink(channelId, guildId) {
  return `https://discord.com/channels/${guildId ?? "@me"}/${channelId}`;
}
function messageLink(channelId, messageId, guildId) {
  return `${typeof guildId === "undefined" ? channelLink(channelId) : channelLink(channelId, guildId)}/${messageId}`;
}
function time(timeOrSeconds, style) {
  if (typeof timeOrSeconds !== "number") {
    timeOrSeconds = Math.floor((timeOrSeconds?.getTime() ?? Date.now()) / 1e3);
  }
  return typeof style === "string" ? `<t:${timeOrSeconds}:${style}>` : `<t:${timeOrSeconds}>`;
}
const TimestampStyles = {
  ShortTime: "t",
  LongTime: "T",
  ShortDate: "d",
  LongDate: "D",
  ShortDateTime: "f",
  LongDateTime: "F",
  RelativeTime: "R"
};
var Faces = /* @__PURE__ */ ((Faces2) => {
  Faces2["Shrug"] = "\xAF\\_(\u30C4)\\_/\xAF";
  Faces2["Tableflip"] = "(\u256F\xB0\u25A1\xB0\uFF09\u256F\uFE35 \u253B\u2501\u253B";
  Faces2["Unflip"] = "\u252C\u2500\u252C \u30CE( \u309C-\u309C\u30CE)";
  return Faces2;
})(Faces || {});

export { Faces, TimestampStyles, blockQuote, bold, channelLink, channelMention, codeBlock, formatEmoji, hideLinkEmbed, hyperlink, inlineCode, italic, messageLink, quote, roleMention, spoiler, strikethrough, time, underscore, userMention };
//# sourceMappingURL=formatters.mjs.map
