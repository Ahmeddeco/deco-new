import 'server-only'

const dictionaries = {
  en: () => import('./contents/en.json').then((module) => module.default),
  ar: () => import('./contents/ar.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'ar') =>
  dictionaries[locale]()
