import { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from 'discord-api-types/v10';
export declare class ApplicationCommandOptionWithChoicesAndAutocompleteMixin<T extends string | number> {
    readonly choices?: APIApplicationCommandOptionChoice<T>[];
    readonly autocomplete?: boolean;
    readonly type: ApplicationCommandOptionType;
    /**
     * Adds multiple choices for this option
     *
     * @param choices - The choices to add
     */
    addChoices(...choices: APIApplicationCommandOptionChoice<T>[]): this;
    setChoices<Input extends APIApplicationCommandOptionChoice<T>[]>(...choices: Input): this;
    /**
     * Marks the option as autocompletable
     * @param autocomplete - If this option should be autocompletable
     */
    setAutocomplete(autocomplete: boolean): this;
}
//# sourceMappingURL=ApplicationCommandOptionWithChoicesAndAutocompleteMixin.d.ts.map