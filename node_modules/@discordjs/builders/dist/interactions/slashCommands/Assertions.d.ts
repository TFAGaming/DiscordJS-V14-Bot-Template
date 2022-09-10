import { type APIApplicationCommandOptionChoice, Locale, LocalizationMap } from 'discord-api-types/v10';
import type { ToAPIApplicationCommandOptions } from './SlashCommandBuilder';
import type { SlashCommandSubcommandBuilder, SlashCommandSubcommandGroupBuilder } from './SlashCommandSubcommands';
import type { ApplicationCommandOptionBase } from './mixins/ApplicationCommandOptionBase';
export declare function validateName(name: unknown): asserts name is string;
export declare function validateDescription(description: unknown): asserts description is string;
export declare function validateLocale(locale: unknown): Locale;
export declare function validateMaxOptionsLength(options: unknown): asserts options is ToAPIApplicationCommandOptions[];
export declare function validateRequiredParameters(name: string, description: string, options: ToAPIApplicationCommandOptions[]): void;
export declare function validateDefaultPermission(value: unknown): asserts value is boolean;
export declare function validateRequired(required: unknown): asserts required is boolean;
export declare function validateChoicesLength(amountAdding: number, choices?: APIApplicationCommandOptionChoice[]): void;
export declare function assertReturnOfBuilder<T extends ApplicationCommandOptionBase | SlashCommandSubcommandBuilder | SlashCommandSubcommandGroupBuilder>(input: unknown, ExpectedInstanceOf: new () => T): asserts input is T;
export declare const localizationMapPredicate: import("@sapphire/shapeshift").UnionValidator<import("@sapphire/shapeshift").UndefinedToOptional<Partial<Record<"en-US" | "en-GB" | "bg" | "zh-CN" | "zh-TW" | "hr" | "cs" | "da" | "nl" | "fi" | "fr" | "de" | "el" | "hi" | "hu" | "it" | "ja" | "ko" | "lt" | "no" | "pl" | "pt-BR" | "ro" | "ru" | "es-ES" | "sv-SE" | "th" | "tr" | "uk" | "vi", string | null>>> | null | undefined>;
export declare function validateLocalizationMap(value: unknown): asserts value is LocalizationMap;
export declare function validateDMPermission(value: unknown): asserts value is boolean | null | undefined;
export declare function validateDefaultMemberPermissions(permissions: unknown): string | null | undefined;
//# sourceMappingURL=Assertions.d.ts.map