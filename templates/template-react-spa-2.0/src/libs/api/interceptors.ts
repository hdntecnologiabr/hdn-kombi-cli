import { AxiosError, AxiosRequestConfig } from "axios";

const logger = (config: AxiosRequestConfig) => config;

const auth = (config: AxiosRequestConfig) => config;

const errorHandler = (error: AxiosError) => Promise.reject(error);

const Interceptors = {
  logger,
  auth,
  errorHandler,
};

export { Interceptors };
