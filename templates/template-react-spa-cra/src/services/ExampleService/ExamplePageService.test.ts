import Api from "clients/api/Api";

import { getApiHost } from "services/HostService/HostService";

import { ExamplePageService } from "./ExamplePageService";

jest.mock("../../clients/api/Api");

const MOCKED_ERROR = "Mocked error";

describe("ExamplePageService", () => {
  const logErrorMock = jest.fn();

  beforeEach(() => {
    (getApiHost as jest.Mock).mockImplementation(() => "http://localhost:3000");
  });

  describe("getExamplePageData", () => {
    it("should call the correct url", async () => {
      const url = "http://localhost:3000/api/example";
      const mockedGet = jest.fn().mockResolvedValue({ data: {} });
      Api.get = mockedGet;

      await ExamplePageService.getExampleData();

      expect(mockedGet.mock.calls[0][0]).toEqual(url);
    });

    it("should throw an error when the request fails", async () => {
      expect.assertions(1);
      const error = new Error(MOCKED_ERROR);
      Api.get = jest.fn().mockRejectedValue(error);

      await ExamplePageService.getExampleData().catch(receivedError => {
        expect(receivedError).toBe(error);
      });
    });

    it("should log an error when the request fails", async () => {
      const error = { message: MOCKED_ERROR };
      Api.get = jest.fn().mockRejectedValue(error);

      await ExamplePageService.getExampleData().catch(() => {
        expect(logErrorMock).toHaveBeenCalledWith(error);
      });
    });
  });
});
