import en from "../../public/locales/en/common.json";
import { translations } from "../app/translations.ts";
import type { Locale } from "./types";

function deepMerge<T extends Record<string, unknown>>(
  base: T,
  patch: Record<string, unknown>
): T {
  const result = { ...base } as Record<string, unknown>;
  for (const key of Object.keys(patch)) {
    const baseVal = base[key];
    const patchVal = patch[key];
    if (
      patchVal &&
      typeof patchVal === "object" &&
      !Array.isArray(patchVal) &&
      baseVal &&
      typeof baseVal === "object" &&
      !Array.isArray(baseVal)
    ) {
      result[key] = deepMerge(
        baseVal as Record<string, unknown>,
        patchVal as Record<string, unknown>
      );
    } else if (patchVal !== undefined) {
      result[key] = patchVal;
    }
  }
  return result as T;
}

export const resources: Record<Locale, typeof en> = {
  en,
  ar: deepMerge(
    en,
    translations.ar as unknown as Record<string, unknown>
  ),
};
