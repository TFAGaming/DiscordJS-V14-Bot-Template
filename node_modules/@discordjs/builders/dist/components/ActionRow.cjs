'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const v10 = require('discord-api-types/v10');
const Component = require('./Component.cjs');
const Components = require('./Components.cjs');
const normalizeArray = require('../util/normalizeArray.cjs');

class ActionRowBuilder extends Component.ComponentBuilder {
  constructor({ components, ...data } = {}) {
    super({ type: v10.ComponentType.ActionRow, ...data });
    this.components = components?.map((c) => Components.createComponentBuilder(c)) ?? [];
  }
  addComponents(...components) {
    this.components.push(...normalizeArray.normalizeArray(components));
    return this;
  }
  setComponents(...components) {
    this.components.splice(0, this.components.length, ...normalizeArray.normalizeArray(components));
    return this;
  }
  toJSON() {
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    };
  }
}

exports.ActionRowBuilder = ActionRowBuilder;
//# sourceMappingURL=ActionRow.cjs.map
