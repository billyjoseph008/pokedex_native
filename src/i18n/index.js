import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import locale from 'react-native-locale-detector';
import { AsyncStorage } from 'react-native';
import {I18nManager} from 'react-native';

import en from './en/en';
import es from './es/es';
import de from './de/de';

const STORAGE_KEY = '@APP:languageCode';

const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true, 
    detect: async (callback) => {
        const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
        const lng = (savedDataJSON) ? savedDataJSON: null;
        const selectLanguage = lng || locale;
        console.log('detect - selectLanguage:', selectLanguage);
        callback(selectLanguage);
    },
    cacheUserLanguage: () => {}
};

const resources = {
  en: {
    translation: en
    ,
  },
  es: {
    translation: es,
  },
  de: {
    translation: de,
  }
};


i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
    resources,
    lng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;