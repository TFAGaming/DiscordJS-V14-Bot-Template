import type { ContextMenuCommandType } from './ContextMenuCommandBuilder';
export declare function validateDefaultPermission(value: unknown): asserts value is boolean;
export declare function validateName(name: unknown): asserts name is string;
export declare function validateType(type: unknown): asserts type is ContextMenuCommandType;
export declare function validateRequiredParameters(name: string, type: number): void;
export declare function validateDMPermission(value: unknown): asserts value is boolean | null | undefined;
export declare function validateDefaultMemberPermissions(permissions: unknown): string | null | undefined;
//# sourceMappingURL=Assertions.d.ts.map