import Api from "clients/api/Api";

import { ExamplePageValue } from "domains/exampleDomain";

const getExampleData = async (): Promise<ExamplePageValue> => {
  return Api.get({
    url: "/example",
  })
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      throw err;
    });
};

export const ExamplePageService = {
  getExampleData,
};
