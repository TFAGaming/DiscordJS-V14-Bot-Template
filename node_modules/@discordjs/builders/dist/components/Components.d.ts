import { APIMessageComponent, APIModalComponent, ComponentType } from 'discord-api-types/v10';
import { ActionRowBuilder, type AnyComponentBuilder, type MessageComponentBuilder, type ModalComponentBuilder } from './ActionRow';
import { ButtonBuilder } from './button/Button';
import { SelectMenuBuilder } from './selectMenu/SelectMenu';
import { TextInputBuilder } from './textInput/TextInput';
export interface MappedComponentTypes {
    [ComponentType.ActionRow]: ActionRowBuilder<AnyComponentBuilder>;
    [ComponentType.Button]: ButtonBuilder;
    [ComponentType.SelectMenu]: SelectMenuBuilder;
    [ComponentType.TextInput]: TextInputBuilder;
}
/**
 * Factory for creating components from API data
 *
 * @param data - The api data to transform to a component class
 */
export declare function createComponentBuilder<T extends keyof MappedComponentTypes>(data: (APIMessageComponent | APIModalComponent) & {
    type: T;
}): MappedComponentTypes[T];
export declare function createComponentBuilder<C extends MessageComponentBuilder | ModalComponentBuilder>(data: C): C;
//# sourceMappingURL=Components.d.ts.map