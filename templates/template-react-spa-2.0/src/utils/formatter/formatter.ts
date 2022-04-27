/* eslint-disable import/no-duplicates */
import { format, Locale } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

const DECIMAL_DIVISOR = 100;

const dateLocales: { [key: string]: Locale } = {
  enUS,
  ptBR,
};

const formatStringAutoCapitalize = (text: string): string => {
  const splitWordsRegex = new RegExp(/([A-Z])/g);

  const result = text.replace(splitWordsRegex, "$1");

  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
};

const formatStringTruncate = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
};

const customCapitalize = (locale: string | number, date: string): string => {
  if (locale === "pt-BR") return formatStringAutoCapitalize(date);
  const dateSplit = date.split(" ");
  const capitalizeDate = dateSplit.map((datePart) =>
    formatStringAutoCapitalize(datePart),
  );
  return capitalizeDate.join(" ");
};

const formatDate = (
  date: Date,
  options: {
    formatStr: string;
    isCapitalizedPtBr?: boolean;
  },
): string => {
  const { formatStr, isCapitalizedPtBr } = options;
  const browserLocale = navigator.language;
  const formattedDate = format(date, formatStr, {
    locale:
      dateLocales[browserLocale.replace("-", "") as keyof typeof dateLocales],
  });
  if (!isCapitalizedPtBr && browserLocale === "pt-BR") return formattedDate;
  return customCapitalize(browserLocale, formattedDate);
};

const formatNumber = (num: number, opt?: Intl.NumberFormatOptions): string => {
  const browserLocale = navigator.language;
  const language =
    browserLocale === "en-US" || browserLocale === "en-ZA" ? "en" : "pt";
  return new Intl.NumberFormat(language, opt).format(num);
};

const formatPercentage = (num: number, allowNegative = false): string => {
  const browserLocale = navigator.language;
  const language =
    browserLocale === "en-US" || browserLocale === "en-ZA" ? "en" : "pt";
  const number = !allowNegative
    ? Math.abs(num) / DECIMAL_DIVISOR
    : num / DECIMAL_DIVISOR;
  return new Intl.NumberFormat(language, {
    style: "percent",
    maximumFractionDigits: 2,
  })
    .format(number)
    .replace(/\s/g, "");
};

const Formatter = {
  number: formatNumber,
  date: formatDate,
  percentage: formatPercentage,
  capitalize: formatStringAutoCapitalize,
  truncate: formatStringTruncate,
};

export { Formatter };
