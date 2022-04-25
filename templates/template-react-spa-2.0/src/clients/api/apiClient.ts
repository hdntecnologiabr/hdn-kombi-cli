import { API_URL } from "~/utils/constants";
import axios from "axios";

import {
  authInterceptor,
  errorInterceptor,
  loggerInterceptor,
} from "./interceptors";

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(authInterceptor);
apiClient.interceptors.request.use(loggerInterceptor);
apiClient.interceptors.response.use((response) => response, errorInterceptor);

export { apiClient };
