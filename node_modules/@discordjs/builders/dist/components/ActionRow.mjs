import { ComponentType } from 'discord-api-types/v10';
import { ComponentBuilder } from './Component.mjs';
import { createComponentBuilder } from './Components.mjs';
import { normalizeArray } from '../util/normalizeArray.mjs';

class ActionRowBuilder extends ComponentBuilder {
  constructor({ components, ...data } = {}) {
    super({ type: ComponentType.ActionRow, ...data });
    this.components = components?.map((c) => createComponentBuilder(c)) ?? [];
  }
  addComponents(...components) {
    this.components.push(...normalizeArray(components));
    return this;
  }
  setComponents(...components) {
    this.components.splice(0, this.components.length, ...normalizeArray(components));
    return this;
  }
  toJSON() {
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    };
  }
}

export { ActionRowBuilder };
//# sourceMappingURL=ActionRow.mjs.map
