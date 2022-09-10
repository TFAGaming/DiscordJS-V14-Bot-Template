import { APIApplicationCommandSubcommandGroupOption, APIApplicationCommandSubcommandOption } from 'discord-api-types/v10';
import type { ToAPIApplicationCommandOptions } from './SlashCommandBuilder';
import type { ApplicationCommandOptionBase } from './mixins/ApplicationCommandOptionBase';
import { SharedNameAndDescription } from './mixins/NameAndDescription';
import { SharedSlashCommandOptions } from './mixins/SharedSlashCommandOptions';
/**
 * Represents a folder for subcommands
 *
 * For more information, go to https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups
 */
export declare class SlashCommandSubcommandGroupBuilder implements ToAPIApplicationCommandOptions {
    /**
     * The name of this subcommand group
     */
    readonly name: string;
    /**
     * The description of this subcommand group
     */
    readonly description: string;
    /**
     * The subcommands part of this subcommand group
     */
    readonly options: SlashCommandSubcommandBuilder[];
    /**
     * Adds a new subcommand to this group
     *
     * @param input - A function that returns a subcommand builder, or an already built builder
     */
    addSubcommand(input: SlashCommandSubcommandBuilder | ((subcommandGroup: SlashCommandSubcommandBuilder) => SlashCommandSubcommandBuilder)): this;
    toJSON(): APIApplicationCommandSubcommandGroupOption;
}
export interface SlashCommandSubcommandGroupBuilder extends SharedNameAndDescription {
}
/**
 * Represents a subcommand
 *
 * For more information, go to https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups
 */
export declare class SlashCommandSubcommandBuilder implements ToAPIApplicationCommandOptions {
    /**
     * The name of this subcommand
     */
    readonly name: string;
    /**
     * The description of this subcommand
     */
    readonly description: string;
    /**
     * The options of this subcommand
     */
    readonly options: ApplicationCommandOptionBase[];
    toJSON(): APIApplicationCommandSubcommandOption;
}
export interface SlashCommandSubcommandBuilder extends SharedNameAndDescription, SharedSlashCommandOptions<false> {
}
//# sourceMappingURL=SlashCommandSubcommands.d.ts.map