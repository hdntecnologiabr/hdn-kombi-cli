import { AxiosRequestConfig } from "axios";

const authInterceptor = (config: AxiosRequestConfig) => config;

export { authInterceptor };
