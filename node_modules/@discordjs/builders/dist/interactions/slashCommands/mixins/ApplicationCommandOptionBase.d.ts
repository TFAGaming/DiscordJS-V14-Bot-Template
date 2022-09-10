import type { APIApplicationCommandBasicOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { SharedNameAndDescription } from './NameAndDescription';
export declare abstract class ApplicationCommandOptionBase extends SharedNameAndDescription {
    abstract readonly type: ApplicationCommandOptionType;
    readonly required: boolean;
    /**
     * Marks the option as required
     *
     * @param required - If this option should be required
     */
    setRequired(required: boolean): this;
    abstract toJSON(): APIApplicationCommandBasicOption;
    protected runRequiredValidations(): void;
}
//# sourceMappingURL=ApplicationCommandOptionBase.d.ts.map