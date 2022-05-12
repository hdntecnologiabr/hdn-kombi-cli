import { render, screen } from "@testing-library/react";
import React from "react";
import { FormattedMessage } from "react-intl";
import IntlProvider, { flattenObject } from "./provider";

describe("flattenObject", () => {
  it("should return a flat array", () => {
    const result = flattenObject({
      TEST: {
        TRANSLATE: "Translate",
      },
    });
    expect(result).toEqual({ "TEST.TRANSLATE": "Translate" });
  });
});

describe("provider", () => {
  it("should display the text with the default language if the store does not have one selected", () => {
    render(
      <IntlProvider>
        <FormattedMessage id="TEST.TRANSLATE" />
      </IntlProvider>,
    );
    expect(screen.getByText("Translate")).toBeDefined();
  });
});
