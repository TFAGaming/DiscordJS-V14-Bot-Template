/**
 * A class for generating and deconstructing Twitter snowflakes.
 *
 * A {@link https://developer.twitter.com/en/docs/twitter-ids Twitter snowflake}
 * is a 64-bit unsigned integer with 4 fields that have a fixed epoch value.
 *
 * If we have a snowflake `266241948824764416` we can represent it as binary:
 * ```
 * 64                                          22     17     12          0
 *  000000111011000111100001101001000101000000  00001  00000  000000000000
 *           number of ms since epoch           worker  pid    increment
 * ```
 */
export declare class Snowflake {
    #private;
    /**
     * Alias for {@link deconstruct}
     */
    decode: (id: string | bigint) => DeconstructedSnowflake;
    /**
     * @param epoch the epoch to use
     */
    constructor(epoch: number | bigint | Date);
    /**
     * The epoch for this snowflake.
     */
    get epoch(): bigint;
    /**
     * Generates a snowflake given an epoch and optionally a timestamp
     * @param options options to pass into the generator, see {@link SnowflakeGenerateOptions}
     *
     * **note** when `increment` is not provided it defaults to the private `increment` of the instance
     * @example
     * ```typescript
     * const epoch = new Date('2000-01-01T00:00:00.000Z');
     * const snowflake = new Snowflake(epoch).generate();
     * ```
     * @returns A unique snowflake
     */
    generate({ increment, timestamp, workerId, processId }?: SnowflakeGenerateOptions): bigint;
    /**
     * Deconstructs a snowflake given a snowflake ID
     * @param id the snowflake to deconstruct
     * @returns a deconstructed snowflake
     * @example
     * ```typescript
     * const epoch = new Date('2000-01-01T00:00:00.000Z');
     * const snowflake = new Snowflake(epoch).deconstruct('3971046231244935168');
     * ```
     */
    deconstruct(id: string | bigint): DeconstructedSnowflake;
    /**
     * Retrieves the timestamp field's value from a snowflake.
     * @param id The snowflake to get the timestamp value from.
     * @returns The UNIX timestamp that is stored in `id`.
     */
    timestampFrom(id: string | bigint): number;
}
/**
 * Options for Snowflake#generate
 */
export interface SnowflakeGenerateOptions {
    /**
     * Timestamp or date of the snowflake to generate
     * @default Date.now()
     */
    timestamp?: number | bigint | Date;
    /**
     * The increment to use
     * @default 0n
     * @remark keep in mind that this bigint is auto-incremented between generate calls
     */
    increment?: bigint;
    /**
     * The worker ID to use, will be truncated to 5 bits (0-31)
     * @default 0n
     */
    workerId?: bigint;
    /**
     * The process ID to use, will be truncated to 5 bits (0-31)
     * @default 1n
     */
    processId?: bigint;
}
/**
 * Object returned by Snowflake#deconstruct
 */
export interface DeconstructedSnowflake {
    /**
     * The id in BigInt form
     */
    id: bigint;
    /**
     * The timestamp stored in the snowflake
     */
    timestamp: bigint;
    /**
     * The worker id stored in the snowflake
     */
    workerId: bigint;
    /**
     * The process id stored in the snowflake
     */
    processId: bigint;
    /**
     * The increment stored in the snowflake
     */
    increment: bigint;
    /**
     * The epoch to use in the snowflake
     */
    epoch: bigint;
}
//# sourceMappingURL=Snowflake.d.ts.map