import Cookies from 'js-cookie';

// App
const sidebarStatusKey = 'sidebarStatus';
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey);
export const setSidebarStatus = (sidbarStatus: string) =>
  Cookies.set(sidebarStatusKey, sidbarStatus);

const languageKey = 'language';
export const getLanguage = () => Cookies.get(languageKey);
export const setLanguage = (language: string) =>
  Cookies.set(languageKey, language);

const sizeKey = 'size';
export const getSize = () => Cookies.get(sizeKey);
export const setSize = (size: string) => Cookies.set(sizeKey, size);
