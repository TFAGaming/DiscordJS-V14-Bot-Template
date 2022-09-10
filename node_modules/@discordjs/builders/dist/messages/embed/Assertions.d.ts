import type { APIEmbedField } from 'discord-api-types/v10';
export declare const fieldNamePredicate: import("@sapphire/shapeshift").StringValidator<string>;
export declare const fieldValuePredicate: import("@sapphire/shapeshift").StringValidator<string>;
export declare const fieldInlinePredicate: import("@sapphire/shapeshift").UnionValidator<boolean | undefined>;
export declare const embedFieldPredicate: import("@sapphire/shapeshift").ObjectValidator<{
    name: string;
    value: string;
    inline: boolean | undefined;
}, import("@sapphire/shapeshift").UndefinedToOptional<{
    name: string;
    value: string;
    inline: boolean | undefined;
}>>;
export declare const embedFieldsArrayPredicate: import("@sapphire/shapeshift").ArrayValidator<import("@sapphire/shapeshift").UndefinedToOptional<{
    name: string;
    value: string;
    inline: boolean | undefined;
}>[], import("@sapphire/shapeshift").UndefinedToOptional<{
    name: string;
    value: string;
    inline: boolean | undefined;
}>>;
export declare const fieldLengthPredicate: import("@sapphire/shapeshift").NumberValidator<number>;
export declare function validateFieldLength(amountAdding: number, fields?: APIEmbedField[]): void;
export declare const authorNamePredicate: import("@sapphire/shapeshift").UnionValidator<string | null>;
export declare const imageURLPredicate: import("@sapphire/shapeshift").UnionValidator<string | null | undefined>;
export declare const urlPredicate: import("@sapphire/shapeshift").UnionValidator<string | null | undefined>;
export declare const embedAuthorPredicate: import("@sapphire/shapeshift").ObjectValidator<{
    name: string | null;
    iconURL: string | null | undefined;
    url: string | null | undefined;
}, import("@sapphire/shapeshift").UndefinedToOptional<{
    name: string | null;
    iconURL: string | null | undefined;
    url: string | null | undefined;
}>>;
export declare const RGBPredicate: import("@sapphire/shapeshift").NumberValidator<number>;
export declare const colorPredicate: import("@sapphire/shapeshift").UnionValidator<number | [number, number, number] | null>;
export declare const descriptionPredicate: import("@sapphire/shapeshift").UnionValidator<string | null>;
export declare const footerTextPredicate: import("@sapphire/shapeshift").UnionValidator<string | null>;
export declare const embedFooterPredicate: import("@sapphire/shapeshift").ObjectValidator<{
    text: string | null;
    iconURL: string | null | undefined;
}, import("@sapphire/shapeshift").UndefinedToOptional<{
    text: string | null;
    iconURL: string | null | undefined;
}>>;
export declare const timestampPredicate: import("@sapphire/shapeshift").UnionValidator<number | Date | null>;
export declare const titlePredicate: import("@sapphire/shapeshift").UnionValidator<string | null>;
//# sourceMappingURL=Assertions.d.ts.map