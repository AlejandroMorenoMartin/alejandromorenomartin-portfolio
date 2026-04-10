import es from "./es.json";
import en from "./en.json";

export type Lang = "es" | "en";

const translations = { es, en } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first === "en") return "en";
  return "es";
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getLocalizedPath(lang: Lang, path = ""): string {
  const base = lang === "en" ? "/en" : "";
  return `${base}/${path}`.replace(/\/$/, "") || "/";
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}
