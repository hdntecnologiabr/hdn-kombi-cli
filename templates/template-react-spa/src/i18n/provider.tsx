import React from "react";
import { IntlProvider as NativeProvider } from "react-intl";

import MessageMap from "./i18n.d";
import { enUS, ptBR } from "./languages";

type IIntlProvider = {
  children: JSX.Element;
};

const DEFAULT_LANGUAGE = "en-US";
const MESSAGES: { [language: string]: MessageMap } = {
  enUS,
  ptBR
};

export function IntlProvider({ children }: IIntlProvider): JSX.Element {
  const locale = DEFAULT_LANGUAGE;

  const mergedMessages = mergeMessages(MESSAGES, locale.replace("-", ""));

  return (
    <NativeProvider locale={locale} defaultLocale={DEFAULT_LANGUAGE} messages={mergedMessages}>
      {children}
    </NativeProvider>
  );
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any */
export const flattenObject = (ob: any): any => {
  const toReturn: { [key: string]: any } = {};

  for (const i in ob) {
    if (typeof ob[i] === "object" && ob[i] !== null) {
      const flatObject = flattenObject(ob[i]);
      // eslint-disable-next-line guard-for-in
      for (const x in flatObject) {
        toReturn[`${i}.${x}`] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};
/* eslint-enable */

export const mergeMessages = (messagesInput: MessageMap, selectedLocale: string): any => {
  const defaultMessages = flattenObject(messagesInput[DEFAULT_LANGUAGE]);
  const localeMessages = flattenObject(messagesInput[selectedLocale]);
  return { ...defaultMessages, ...localeMessages };
};

export default IntlProvider;
