'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const v10 = require('discord-api-types/v10');
const ActionRow = require('./ActionRow.cjs');
const Component = require('./Component.cjs');
const Button = require('./button/Button.cjs');
const SelectMenu = require('./selectMenu/SelectMenu.cjs');
const TextInput = require('./textInput/TextInput.cjs');

function createComponentBuilder(data) {
  if (data instanceof Component.ComponentBuilder) {
    return data;
  }
  switch (data.type) {
    case v10.ComponentType.ActionRow:
      return new ActionRow.ActionRowBuilder(data);
    case v10.ComponentType.Button:
      return new Button.ButtonBuilder(data);
    case v10.ComponentType.SelectMenu:
      return new SelectMenu.SelectMenuBuilder(data);
    case v10.ComponentType.TextInput:
      return new TextInput.TextInputBuilder(data);
    default:
      throw new Error(`Cannot properly serialize component type: ${data.type}`);
  }
}

exports.createComponentBuilder = createComponentBuilder;
//# sourceMappingURL=Components.cjs.map
