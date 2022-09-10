import { ActionRowBuilder, type ModalActionRowComponentBuilder } from '../../components/ActionRow';
export declare const titleValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare const componentsValidator: import("@sapphire/shapeshift").ArrayValidator<[ActionRowBuilder<import("../../components/ActionRow").AnyComponentBuilder>, ...ActionRowBuilder<import("../../components/ActionRow").AnyComponentBuilder>[]], ActionRowBuilder<import("../../components/ActionRow").AnyComponentBuilder>>;
export declare function validateRequiredParameters(customId?: string, title?: string, components?: ActionRowBuilder<ModalActionRowComponentBuilder>[]): void;
//# sourceMappingURL=Assertions.d.ts.map