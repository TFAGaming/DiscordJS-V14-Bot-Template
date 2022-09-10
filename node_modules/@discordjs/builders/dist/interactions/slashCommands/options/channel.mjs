import { ApplicationCommandOptionType } from 'discord-api-types/v10';
import { mix } from 'ts-mixer';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase.mjs';
import { ApplicationCommandOptionChannelTypesMixin } from '../mixins/ApplicationCommandOptionChannelTypesMixin.mjs';

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let SlashCommandChannelOption = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = ApplicationCommandOptionType.Channel;
  }
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
SlashCommandChannelOption = __decorateClass([
  mix(ApplicationCommandOptionChannelTypesMixin)
], SlashCommandChannelOption);

export { SlashCommandChannelOption };
//# sourceMappingURL=channel.mjs.map
