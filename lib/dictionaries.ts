import "server-only"

interface Dictionary {
  [key: string]: any
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  hi: () => import("./dictionaries/hi.json").then((module) => module.default),
  mr: () => import("./dictionaries/mr.json").then((module) => module.default),
  ta: () => import("./dictionaries/ta.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Default to English if the locale is not supported
  const loadDictionary = dictionaries[locale] || dictionaries.en
  return loadDictionary()
}

