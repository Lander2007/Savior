import type { TranslationSchema } from "./types";

export function getByPath(
  obj: TranslationSchema | Record<string, unknown>,
  path: string
): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function applyParams(
  value: string,
  params?: Record<string, string | number>
): string {
  if (!params) return value;
  return Object.entries(params).reduce(
    (str, [key, val]) => str.replaceAll(`{{${key}}}`, String(val)),
    value
  );
}
