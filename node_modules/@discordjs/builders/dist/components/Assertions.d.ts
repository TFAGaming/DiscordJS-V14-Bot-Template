import { APIMessageComponentEmoji, ButtonStyle } from 'discord-api-types/v10';
import { SelectMenuOptionBuilder } from './selectMenu/SelectMenuOption';
export declare const customIdValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare const emojiValidator: import("@sapphire/shapeshift").ObjectValidator<{
    id?: string | undefined;
    name?: string | undefined;
    animated?: boolean | undefined;
}, import("@sapphire/shapeshift").UndefinedToOptional<{
    id?: string | undefined;
    name?: string | undefined;
    animated?: boolean | undefined;
}>>;
export declare const disabledValidator: import("@sapphire/shapeshift").BooleanValidator<boolean>;
export declare const buttonLabelValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare const buttonStyleValidator: import("@sapphire/shapeshift").NativeEnumValidator<typeof ButtonStyle>;
export declare const placeholderValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare const minMaxValidator: import("@sapphire/shapeshift").NumberValidator<number>;
export declare const labelValueDescriptionValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare const jsonOptionValidator: import("@sapphire/shapeshift").ObjectValidator<{
    label: string;
    value: string;
    description: string | undefined;
    emoji: import("@sapphire/shapeshift").UndefinedToOptional<{
        id?: string | undefined;
        name?: string | undefined;
        animated?: boolean | undefined;
    }> | undefined;
    default: boolean | undefined;
}, import("@sapphire/shapeshift").UndefinedToOptional<{
    label: string;
    value: string;
    description: string | undefined;
    emoji: import("@sapphire/shapeshift").UndefinedToOptional<{
        id?: string | undefined;
        name?: string | undefined;
        animated?: boolean | undefined;
    }> | undefined;
    default: boolean | undefined;
}>>;
export declare const optionValidator: import("@sapphire/shapeshift").InstanceValidator<SelectMenuOptionBuilder>;
export declare const optionsValidator: import("@sapphire/shapeshift").ArrayValidator<SelectMenuOptionBuilder[], SelectMenuOptionBuilder>;
export declare const optionsLengthValidator: import("@sapphire/shapeshift").NumberValidator<number>;
export declare function validateRequiredSelectMenuParameters(options: SelectMenuOptionBuilder[], customId?: string): void;
export declare const defaultValidator: import("@sapphire/shapeshift").BooleanValidator<boolean>;
export declare function validateRequiredSelectMenuOptionParameters(label?: string, value?: string): void;
export declare const urlValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare function validateRequiredButtonParameters(style?: ButtonStyle, label?: string, emoji?: APIMessageComponentEmoji, customId?: string, url?: string): void;
//# sourceMappingURL=Assertions.d.ts.map