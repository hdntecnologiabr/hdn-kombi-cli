import { describe, expect, it, vi } from "vitest";

import Formatter from "./formatter";

describe("formatter", () => {
  const mockAuthenticationValues = (language: string) => {
    vi.spyOn(window.navigator, 'language', 'get').mockReturnValue(language)
  };

  describe("date", () => {
    const dateMock = new Date("2021-01-01T03:00:00.000Z");

    it.each([
      { lang: "en-US", format: "MMMM dd", isCapitalized: false, formattedDate: "January 01" },
      { lang: "en-ZA", format: "MMMM dd", isCapitalized: false, formattedDate: "January 01" },
      { lang: "es-CO", format: "MMMM dd", isCapitalized: false, formattedDate: "Enero 01" },
      { lang: "es-DO", format: "MMMM dd", isCapitalized: false, formattedDate: "Enero 01" },
      { lang: "es-EC", format: "MMMM dd", isCapitalized: false, formattedDate: "Enero 01" },
      { lang: "es-EC", format: "EEE, MMM d" }, isCapitalized: false, formattedDate: "Vie, Enero 1"},
    { lang: "pt-BR", format: "MMMM dd", isCapitalized: false, formattedDate: "janeiro 01" },
    { lang: "pt-BR", format: "EEEEEE,  'de' MMMM" }, isCapitalized: true, formattedDate: "Sex, 1 de janeiro"},
    ])(
      "should return the correct formatted date when locale is $lang and format is $format",
      ({ lang, format, formattedDate, isCapitalized }) => {
        mockAuthenticationValues(lang);
        const dateOptions = {
          formatStr: format,
          isCapitalizedPtBr: isCapitalized,
        };
        const expectedFormattedDate = Formatter.date(dateMock, dateOptions);
        expect(expectedFormattedDate).toEqual(formattedDate);
      },
    );
  });

describe("number", () => {
  it.each`
      lang       | originalNumber | formattedNumber
      ${"en-US"} | ${1000}        | ${"1,000"}
      ${"en-ZA"} | ${1000}        | ${"1,000"}
      ${"es-CO"} | ${1000}        | ${"1.000"}
      ${"es-DO"} | ${1000}        | ${"1.000"}
      ${"es-EC"} | ${1000}        | ${"1.000"}
      ${"pt-BR"} | ${1000}        | ${"1.000"}
    `(
    "should return the correct formatted number when locale is $lang and given number is $originalNumber",
    ({ lang, originalNumber, formattedNumber }) => {
      mockAuthenticationValues(lang);
      const expectedFormattedNumber = Formatter.number(originalNumber);
      expect(expectedFormattedNumber).toEqual(formattedNumber);
    },
  );
});

describe("normalize", () => {
  it("should return the correct formatted number normalized", () => {
    const expectedFormattedNumberNormalized = Formatter.normalize({
      value: 50,
      min: 0,
      max: 100,
    });
    expect(expectedFormattedNumberNormalized).toEqual(0.5);
  });
});

describe("percentage", () => {
  it.each`
      lang       | originalNumber | allowNegative | formattedNumber
      ${"en-US"} | ${1}           | ${false}      | ${"1%"}
      ${"en-US"} | ${-1}          | ${false}      | ${"1%"}
      ${"en-US"} | ${-1}          | ${true}       | ${"-1%"}
      ${"en-US"} | ${10.5}        | ${false}      | ${"10.5%"}
      ${"en-ZA"} | ${10.5}        | ${false}      | ${"10.5%"}
      ${"es-CO"} | ${10.5}        | ${false}      | ${"10,5%"}
      ${"es-DO"} | ${10.5}        | ${false}      | ${"10,5%"}
      ${"es-EC"} | ${10.5}        | ${false}      | ${"10,5%"}
      ${"pt-BR"} | ${10.5}        | ${false}      | ${"10,5%"}
    `(
    "should return the correct formatted number when locale is $lang and given number is $originalNumber",
    ({ lang, originalNumber, allowNegative, formattedNumber }) => {
      mockAuthenticationValues(lang);
      const expectedFormattedNumber = Formatter.percentage(
        originalNumber,
        allowNegative,
      );
      expect(expectedFormattedNumber).toEqual(formattedNumber);
    },
  );
});

describe("capitalize", () => {
  it("should return correct capitalized string", () => {
    const expectedCapitalizedString = Formatter.capitalize("capitalize");
    expect(expectedCapitalizedString).toEqual("Capitalize");
  });
});

describe("truncateString", () => {
  const MAX_CHIP_LENGTH = 38;
  it.each`
      originalString                                       | truncatedString
      ${"Ex ipsum veniam esse"}                            | ${"Ex ipsum veniam esse"}
      ${"Ex ipsum veniam esse eu voluptate reprehenderit"} | ${"Ex ipsum veniam esse eu voluptate repr..."}
    `(
    `should return the correct string when string length is $originalString.length`,
    ({ originalString, truncatedString }) => {
      const expectedTruncatedString = Formatter.truncate(
        originalString,
        MAX_CHIP_LENGTH,
      );
      expect(expectedTruncatedString).toEqual(truncatedString);
    },
  );
});
});
