import type { ToAPIApplicationCommandOptions } from '../SlashCommandBuilder';
import { SlashCommandAttachmentOption } from '../options/attachment';
import { SlashCommandBooleanOption } from '../options/boolean';
import { SlashCommandChannelOption } from '../options/channel';
import { SlashCommandIntegerOption } from '../options/integer';
import { SlashCommandMentionableOption } from '../options/mentionable';
import { SlashCommandNumberOption } from '../options/number';
import { SlashCommandRoleOption } from '../options/role';
import { SlashCommandStringOption } from '../options/string';
import { SlashCommandUserOption } from '../options/user';
export declare class SharedSlashCommandOptions<ShouldOmitSubcommandFunctions = true> {
    readonly options: ToAPIApplicationCommandOptions[];
    /**
     * Adds a boolean option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addBooleanOption(input: SlashCommandBooleanOption | ((builder: SlashCommandBooleanOption) => SlashCommandBooleanOption)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    /**
     * Adds a user option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addUserOption(input: SlashCommandUserOption | ((builder: SlashCommandUserOption) => SlashCommandUserOption)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    /**
     * Adds a channel option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addChannelOption(input: SlashCommandChannelOption | ((builder: SlashCommandChannelOption) => SlashCommandChannelOption)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    /**
     * Adds a role option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addRoleOption(input: SlashCommandRoleOption | ((builder: SlashCommandRoleOption) => SlashCommandRoleOption)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    /**
     * Adds an attachment option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addAttachmentOption(input: SlashCommandAttachmentOption | ((builder: SlashCommandAttachmentOption) => SlashCommandAttachmentOption)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    /**
     * Adds a mentionable option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addMentionableOption(input: SlashCommandMentionableOption | ((builder: SlashCommandMentionableOption) => SlashCommandMentionableOption)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    /**
     * Adds a string option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addStringOption(input: SlashCommandStringOption | Omit<SlashCommandStringOption, 'setAutocomplete'> | Omit<SlashCommandStringOption, 'addChoices'> | ((builder: SlashCommandStringOption) => SlashCommandStringOption | Omit<SlashCommandStringOption, 'setAutocomplete'> | Omit<SlashCommandStringOption, 'addChoices'>)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    /**
     * Adds an integer option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addIntegerOption(input: SlashCommandIntegerOption | Omit<SlashCommandIntegerOption, 'setAutocomplete'> | Omit<SlashCommandIntegerOption, 'addChoices'> | ((builder: SlashCommandIntegerOption) => SlashCommandIntegerOption | Omit<SlashCommandIntegerOption, 'setAutocomplete'> | Omit<SlashCommandIntegerOption, 'addChoices'>)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    /**
     * Adds a number option
     *
     * @param input - A function that returns an option builder, or an already built builder
     */
    addNumberOption(input: SlashCommandNumberOption | Omit<SlashCommandNumberOption, 'setAutocomplete'> | Omit<SlashCommandNumberOption, 'addChoices'> | ((builder: SlashCommandNumberOption) => SlashCommandNumberOption | Omit<SlashCommandNumberOption, 'setAutocomplete'> | Omit<SlashCommandNumberOption, 'addChoices'>)): ShouldOmitSubcommandFunctions extends true ? Omit<this, "addSubcommand" | "addSubcommandGroup"> : this;
    private _sharedAddOptionMethod;
}
//# sourceMappingURL=SharedSlashCommandOptions.d.ts.map