// @ts-check

import { encodeHTML } from "./common/utils.js";

/**
 * Retrieves stat card labels for Chrome Extensions in multiple languages.
 *
 * @param {object} props Function arguments.
 * @param {string} props.name The name of the developer/extension.
 * @param {string} props.apostrophe Whether to use apostrophe or not.
 * @returns {object} The locales object.
 */
const statCardLocales = ({ name, apostrophe }) => {
  const encodedName = encodeHTML(name);
  return {
    "statcard.title": {
      en: `${encodedName}'${apostrophe} Chrome Extension Stats`,
      es: `Estadísticas de Extensión Chrome de ${encodedName}`,
      de: `${encodedName + apostrophe} Chrome-Erweiterung Statistiken`,
      fr: `Statistiques d'Extension Chrome de ${encodedName}`,
      it: `Statistiche Estensione Chrome di ${encodedName}`,
      pt: `Estatísticas da Extensão Chrome de ${encodedName}`,
      "pt-br": `Estatísticas da Extensão Chrome de ${encodedName}`,
      ja: `${encodedName}のChrome拡張機能統計`,
      ko: `${encodedName}의 Chrome 확장 프로그램 통계`,
      cn: `${encodedName} 的 Chrome 扩展统计数据`,
      "zh-tw": `${encodedName} 的 Chrome 擴充功能統計`,
      ru: `Статистика расширения Chrome ${encodedName}`,
      ar: `${encodedName} إحصائيات امتداد Chrome`,
      hi: `${encodedName} के Chrome एक्सटेंशन आँकड़े`,
      nl: `${encodedName}'${apostrophe} Chrome-extensie statistieken`,
      pl: `Statystyki rozszerzenia Chrome ${encodedName}`,
      tr: `${encodedName} Chrome Uzantısı İstatistikleri`,
      id: `Statistik Ekstensi Chrome ${encodedName}`,
      vi: `Thống Kê Tiện Ích Chrome ${encodedName}`,
    },
    "statcard.ranktitle": {
      en: `${encodedName}'${apostrophe} Chrome Extension Rank`,
      es: `Clasificación de Extensión Chrome de ${encodedName}`,
      de: `${encodedName + apostrophe} Chrome-Erweiterung Rang`,
      fr: `Classement d'Extension Chrome de ${encodedName}`,
      it: `Classifica Estensione Chrome di ${encodedName}`,
      pt: `Classificação da Extensão Chrome de ${encodedName}`,
      "pt-br": `Classificação da Extensão Chrome de ${encodedName}`,
      ja: `${encodedName}のChrome拡張機能ランク`,
      ko: `${encodedName}의 Chrome 확장 프로그램 순위`,
      cn: `${encodedName} 的 Chrome 扩展排名`,
      "zh-tw": `${encodedName} 的 Chrome 擴充功能排名`,
      ru: `Рейтинг расширения Chrome ${encodedName}`,
      ar: `${encodedName} ترتيب امتداد Chrome`,
      hi: `${encodedName} की Chrome एक्सटेंशन रैंक`,
      nl: `${encodedName}'${apostrophe} Chrome-extensie rang`,
      pl: `Ranking rozszerzenia Chrome ${encodedName}`,
      tr: `${encodedName} Chrome Uzantısı Sıralaması`,
      id: `Peringkat Ekstensi Chrome ${encodedName}`,
      vi: `Xếp Hạng Tiện Ích Chrome ${encodedName}`,
    },
  };
};

/**
 * Check if a locale is available.
 *
 * @param {string} locale The locale to check.
 * @returns {boolean} Whether the locale is available.
 */
const isLocaleAvailable = (locale) => {
  const testLocales = statCardLocales({ name: "test", apostrophe: "" });
  return Object.keys(testLocales["statcard.title"]).includes(locale);
};

export { statCardLocales, isLocaleAvailable };
export default statCardLocales;
