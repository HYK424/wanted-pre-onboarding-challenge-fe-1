import axios, { AxiosRequestConfig, AxiosInstance, AxiosHeaders } from "axios";
import { token } from "./token";

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(
  (config) => {
    try {
      if (token().getToken()) {
        (config.headers as AxiosHeaders).set(
          "Authorization",
          token().getToken()
        );
      }
    } catch (err) {
      alert("세션이 만료되었습니다");
      token().removeToken();
      window.location.href = "/auth";
    }
    return config;
  },
  (error) => {
    alert("세션이 만료되었습니다");
    token().removeToken();
    window.location.href = "/auth";
  }
);

export default api;
