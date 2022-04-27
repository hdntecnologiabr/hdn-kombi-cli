import { describe, expect, it } from "vitest";

import { Api } from "./api";

describe("Api instance", () => {
  it("should create an instance", () => {
    expect(Api).toBeTruthy();
  });
});
