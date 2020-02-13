import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { getLanguage } from '@/utils/cookies';

// element-ui built-in lang
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';
import elementEsLocale from 'element-ui/lib/locale/lang/es';
import elementJaLocale from 'element-ui/lib/locale/lang/ja';
import elementLocale from 'element-ui/lib/locale';

// User defined lang
import enLocale from './en';
import zhLocale from './zh';
import esLocale from './es';
import jaLocale from './ja';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  es: {
    ...esLocale,
    ...elementEsLocale
  },
  ja: {
    ...jaLocale,
    ...elementJaLocale
  }
};

export const getLocale = () => {
  const cookieLanguage = getLanguage();
  if (cookieLanguage) {
    return cookieLanguage;
  }

  const language = navigator.language.toLowerCase(); // 获取浏览器的语言
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }

  // Default language is english
  return 'en';
};

const i18n = new VueI18n({
  locale: getLocale(), // set locale
  messages // set locale messages
});

elementLocale.i18n((key: string, value: string) => i18n.t(key, value));
export default i18n;
