import type { LocaleString, LocalizationMap } from 'discord-api-types/v10';
export declare class SharedNameAndDescription {
    readonly name: string;
    readonly name_localizations?: LocalizationMap;
    readonly description: string;
    readonly description_localizations?: LocalizationMap;
    /**
     * Sets the name
     *
     * @param name - The name
     */
    setName(name: string): this;
    /**
     * Sets the description
     *
     * @param description - The description
     */
    setDescription(description: string): this;
    /**
     * Sets a name localization
     *
     * @param locale - The locale to set a description for
     * @param localizedName - The localized description for the given locale
     */
    setNameLocalization(locale: LocaleString, localizedName: string | null): this;
    /**
     * Sets the name localizations
     *
     * @param localizedNames - The dictionary of localized descriptions to set
     */
    setNameLocalizations(localizedNames: LocalizationMap | null): this;
    /**
     * Sets a description localization
     *
     * @param locale - The locale to set a description for
     * @param localizedDescription - The localized description for the given locale
     */
    setDescriptionLocalization(locale: LocaleString, localizedDescription: string | null): this;
    /**
     * Sets the description localizations
     *
     * @param localizedDescriptions - The dictionary of localized descriptions to set
     */
    setDescriptionLocalizations(localizedDescriptions: LocalizationMap | null): this;
}
//# sourceMappingURL=NameAndDescription.d.ts.map