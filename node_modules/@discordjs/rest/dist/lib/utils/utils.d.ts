/// <reference types="node" />
import { URLSearchParams } from 'node:url';
import { type Dispatcher, type RequestInit } from 'undici';
import type { RequestOptions } from '../REST';
export declare function parseHeader(header: string | string[] | undefined): string | undefined;
/**
 * Creates and populates an URLSearchParams instance from an object, stripping
 * out null and undefined values, while also coercing non-strings to strings.
 *
 * @param options - The options to use
 *
 * @returns A populated URLSearchParams instance
 */
export declare function makeURLSearchParams(options?: Record<string, unknown>): URLSearchParams;
/**
 * Converts the response to usable data
 *
 * @param res - The fetch response
 */
export declare function parseResponse(res: Dispatcher.ResponseData): Promise<unknown>;
/**
 * Check whether a request falls under a sublimit
 *
 * @param bucketRoute - The buckets route identifier
 * @param body - The options provided as JSON data
 * @param method - The HTTP method that will be used to make the request
 *
 * @returns Whether the request falls under a sublimit
 */
export declare function hasSublimit(bucketRoute: string, body?: unknown, method?: string): boolean;
export declare function resolveBody(body: RequestInit['body']): Promise<RequestOptions['body']>;
//# sourceMappingURL=utils.d.ts.map