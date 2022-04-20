import { AxiosRequestConfig } from "axios";

const loggerInterceptor = (config: AxiosRequestConfig) => config;

export { loggerInterceptor };
