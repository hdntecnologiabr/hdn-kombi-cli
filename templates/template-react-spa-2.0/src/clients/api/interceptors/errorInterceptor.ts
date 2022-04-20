import { AxiosError } from "axios";

const errorInterceptor = (error: AxiosError) => Promise.reject(error);

export { errorInterceptor };
