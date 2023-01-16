import axios, { AxiosRequestConfig, AxiosInstance, AxiosHeaders } from "axios";
import { token } from "./token";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

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
      return config;
    } catch (err) {
      console.log(err);
      return config;
    }
  },
  (error) => {
    alert("비정상적인 문제가 발생했습니다");
    token().removeToken();
    navigate("/");
  }
);

export default api;
