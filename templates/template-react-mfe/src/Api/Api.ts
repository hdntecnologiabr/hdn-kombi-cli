/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';

import { getApiHost } from '../services/host/HostService';

export interface IRequest {
  url: string;
  body?: any;
}

Axios.interceptors.request.use(config => config);

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
