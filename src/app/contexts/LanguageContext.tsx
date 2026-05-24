import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { resources } from "../../i18n/resources";
import { applyParams, getByPath } from "../../i18n/utils";
import type { Locale, TranslationSchema } from "../../i18n/types";

const LANG_STORAGE_KEY = "savoria-lang";

type TranslateParams = Record<string, string | number>;

export type TFunction = ((
  key: string,
  params?: TranslateParams
) => string) &
  TranslationSchema;

type LanguageContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  toggleLanguage: () => void;
  t: TFunction;
  tm: <T>(key: string) => T;
  isRTL: boolean;
  dictionary: TranslationSchema;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function readStoredLanguage(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  return stored === "ar" || stored === "en" ? stored : "en";
}

function applyDocumentLanguage(lang: Locale) {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  root.classList.remove("font-latin", "font-arabic");
  root.classList.add(lang === "ar" ? "font-arabic" : "font-latin");
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(readStoredLanguage);
  const dictionary = resources[language];
  const isRTL = language === "ar";

  const setLanguage = useCallback((lang: Locale) => {
    setLanguageState(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    applyDocumentLanguage(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "ar" : "en");
  }, [language, setLanguage]);

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  const t = useMemo((): TFunction => {
    const translate = (key: string, params?: TranslateParams): string => {
      const value = getByPath(dictionary, key);
      if (typeof value === "string") {
        return applyParams(value, params);
      }
      if (import.meta.env.DEV) {
        console.warn(`[i18n] Missing key: ${key} (${language})`);
      }
      return key;
    };
    return Object.assign(translate, dictionary) as TFunction;
  }, [dictionary, language]);

  const tm = useCallback(
    <T,>(key: string): T => getByPath(dictionary, key) as T,
    [dictionary]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      tm,
      isRTL,
      dictionary,
    }),
    [language, setLanguage, toggleLanguage, t, tm, isRTL, dictionary]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
