import { TextInputStyle } from 'discord-api-types/v10';
export declare const textInputStyleValidator: import("@sapphire/shapeshift").NativeEnumValidator<typeof TextInputStyle>;
export declare const minLengthValidator: import("@sapphire/shapeshift").NumberValidator<number>;
export declare const maxLengthValidator: import("@sapphire/shapeshift").NumberValidator<number>;
export declare const requiredValidator: import("@sapphire/shapeshift").BooleanValidator<boolean>;
export declare const valueValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare const placeholderValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare const labelValidator: import("@sapphire/shapeshift").StringValidator<string>;
export declare function validateRequiredParameters(customId?: string, style?: TextInputStyle, label?: string): void;
//# sourceMappingURL=Assertions.d.ts.map