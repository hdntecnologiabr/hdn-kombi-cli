import { ExamplePageService } from "services/ExampleService/ExamplePageService";

import { loadExample, loadExampleDone, loadExampleFail } from "stores/ExampleStore/ExampleEvents";

import LoadExamplePageUseCase from "./LoadExamplePageUseCase";

jest.mock("services/exampleService/ExamplePageService");
jest.mock("stores/exampleStore/ExampleEvents");

describe("LoadExamplePageUseCase", () => {
  const logErrorMock = jest.fn();
  const errorMock = { message: "Error", response: { status: 500 } };

  const exampleResponseMock = {
    title: "Example title",
    description: "Example description",
  };

  it("should call loadExample event on start", async () => {
    ExamplePageService.getExampleData = jest.fn().mockResolvedValue(exampleResponseMock);

    await LoadExamplePageUseCase.execute();

    expect(loadExample).toHaveBeenCalled();
  });

  it("should call loadDashboardDataDone event successfully", async () => {
    ExamplePageService.getExampleData = jest.fn().mockResolvedValue(exampleResponseMock);

    await LoadExamplePageUseCase.execute();

    expect(loadExampleDone).toHaveBeenCalled();
    expect(loadExampleDone).toHaveBeenCalledWith(exampleResponseMock);
  });

  it("should call loadDashboardDataFail event when getDashboardData request fails", async () => {
    ExamplePageService.getExampleData = jest.fn().mockRejectedValue(errorMock);

    await LoadExamplePageUseCase.execute();

    expect(loadExampleFail).toHaveBeenCalled();
  });

  it("should log an error when getPerformanceMeasurement request fails", async () => {
    const message = "[LoadExamplePageUseCase]: ";
    ExamplePageService.getExampleData = jest.fn().mockRejectedValue(errorMock);

    await LoadExamplePageUseCase.execute();

    expect(logErrorMock).toHaveBeenCalledWith(message, errorMock);
  });
});
