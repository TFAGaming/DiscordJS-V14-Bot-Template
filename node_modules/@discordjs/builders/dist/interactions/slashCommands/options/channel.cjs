'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const v10 = require('discord-api-types/v10');
const tsMixer = require('ts-mixer');
const ApplicationCommandOptionBase = require('../mixins/ApplicationCommandOptionBase.cjs');
const ApplicationCommandOptionChannelTypesMixin = require('../mixins/ApplicationCommandOptionChannelTypesMixin.cjs');

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
exports.SlashCommandChannelOption = class extends ApplicationCommandOptionBase.ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    this.type = v10.ApplicationCommandOptionType.Channel;
  }
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
exports.SlashCommandChannelOption = __decorateClass([
  tsMixer.mix(ApplicationCommandOptionChannelTypesMixin.ApplicationCommandOptionChannelTypesMixin)
], exports.SlashCommandChannelOption);
//# sourceMappingURL=channel.cjs.map
