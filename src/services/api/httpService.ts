import axios, { AxiosResponse } from "axios";

export type HTTPResonse<T> = AxiosResponse<T>;

axios.interceptors.response.use(undefined, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("LOGGING ERROR...");
    console.error("ERROR: an unexpected error occurred: ");
    console.error(error);
  }
  return Promise.reject(error);
});

export default class HttpService {
  static get<T>(url: string): Promise<HTTPResonse<T>> {
    return axios.get<T>(url);
  }
  static post<T>(url: string, data?: any): Promise<HTTPResonse<T>> {
    return axios.post<T>(url, data);
  }
  static put<T>(url: string, data?: any): Promise<HTTPResonse<T>> {
    return axios.put<T>(url, data);
  }
  static delete<T>(url: string): Promise<HTTPResonse<T>> {
    return axios.delete<T>(url);
  }
}
