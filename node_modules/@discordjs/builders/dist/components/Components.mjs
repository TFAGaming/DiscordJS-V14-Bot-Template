import { ComponentType } from 'discord-api-types/v10';
import { ActionRowBuilder } from './ActionRow.mjs';
import { ComponentBuilder } from './Component.mjs';
import { ButtonBuilder } from './button/Button.mjs';
import { SelectMenuBuilder } from './selectMenu/SelectMenu.mjs';
import { TextInputBuilder } from './textInput/TextInput.mjs';

function createComponentBuilder(data) {
  if (data instanceof ComponentBuilder) {
    return data;
  }
  switch (data.type) {
    case ComponentType.ActionRow:
      return new ActionRowBuilder(data);
    case ComponentType.Button:
      return new ButtonBuilder(data);
    case ComponentType.SelectMenu:
      return new SelectMenuBuilder(data);
    case ComponentType.TextInput:
      return new TextInputBuilder(data);
    default:
      throw new Error(`Cannot properly serialize component type: ${data.type}`);
  }
}

export { createComponentBuilder };
//# sourceMappingURL=Components.mjs.map
