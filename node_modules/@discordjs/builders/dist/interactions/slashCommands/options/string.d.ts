import { APIApplicationCommandStringOption, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { ApplicationCommandOptionBase } from '../mixins/ApplicationCommandOptionBase';
import { ApplicationCommandOptionWithChoicesAndAutocompleteMixin } from '../mixins/ApplicationCommandOptionWithChoicesAndAutocompleteMixin';
export declare class SlashCommandStringOption extends ApplicationCommandOptionBase {
    readonly type: ApplicationCommandOptionType.String;
    readonly max_length?: number;
    readonly min_length?: number;
    /**
     * Sets the maximum length of this string option.
     *
     * @param max - The maximum length this option can be
     */
    setMaxLength(max: number): this;
    /**
     * Sets the minimum length of this string option.
     *
     * @param min - The minimum length this option can be
     */
    setMinLength(min: number): this;
    toJSON(): APIApplicationCommandStringOption;
}
export interface SlashCommandStringOption extends ApplicationCommandOptionWithChoicesAndAutocompleteMixin<string> {
}
//# sourceMappingURL=string.d.ts.map