import Axios from "axios";

import { getApiHost } from "services/HostService/HostService";

export interface IRequest {
  url: string;
  body?: any;
}

Axios.interceptors.request.use(config => {
  return config;
});

const Api = {
  get: ({ url }: IRequest): Promise<any> =>
    Axios.get(`${getApiHost()}${url}`).catch(error => ({ hasError: true, ...error })),

  post: ({ url, body }: IRequest): Promise<any> =>
    Axios.post(`${getApiHost()}${url}`, body).catch(error => ({
      hasError: true,
      ...error,
    })),

  put: ({ url, body }: IRequest): Promise<any> =>
    Axios.put(`${getApiHost()}${url}`, body).catch(error => ({
      hasError: true,
      ...error,
    })),

  delete: ({ url }: IRequest): Promise<any> =>
    Axios.delete(`${getApiHost()}${url}`).catch(error => ({ hasError: true, ...error })),
};

export default Api;
