import { getUserInfo, signout } from "@/utils/user";
import axios from "axios";

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://production.com"
    : "http://localhost:8081";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      Authorization: `Bearer ${getUserInfo()?.token}`,
    },
  },
  withCredentials: true,
});

/**
 * Request Interceptor
 */
api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getUserInfo().token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response Interceptor
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    handleError(error);
    return Promise.reject(error);
  },
);

const handleError = (error: any) => {
  const code = error.response.status;
  if (code === 401) {
    if (error.config && !error.config.__isRetryRequest) {
      return getAuthToken()
        .then(() => {
          error.config.__isRetryRequest = true;
          return axios(error.config);
        });
    }
  }
  return console.error("interceptors response error", error.response);
};

let authTokenRequest: any;

const getAuthToken = () => {
  if (!authTokenRequest) {
    alert("권한이 없거나 로그인 시간이 만료 되었습니다.\n로그인 페이지로 이동합니다.");
    signout();
    authTokenRequest.then(resetAuthTokenRequest, resetAuthTokenRequest);
  }

  return authTokenRequest;
};

const resetAuthTokenRequest = () => {
  authTokenRequest = null;
};
