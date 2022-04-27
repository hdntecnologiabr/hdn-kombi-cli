import { API_URL } from "~/utils/constants";
import axios from "axios";

import { Interceptors } from "./interceptors";

const Api = axios.create({
  baseURL: API_URL,
});

Api.interceptors.request.use(Interceptors.auth);
Api.interceptors.request.use(Interceptors.logger);
Api.interceptors.response.use(
  (response) => response,
  Interceptors.errorHandler,
);

export { Api };
