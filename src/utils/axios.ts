import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie, deleteCookie } from "./cookie-utils";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshTokenReIssue = async () => {
  const refreshToken = getCookie("refreshToken");
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
      {
        refreshToken,
      }
    );
    const newAccessToken = response.data.accessToken;
    if (!newAccessToken) {
      throw new Error("새로운 액세스 토큰 발급 실패");
    }
    const isProduction = process.env.NODE_ENV === "production";
    let cookieString = `accessToken=${newAccessToken}; path=/`;
    if (isProduction) {
      cookieString += "; secure";
    }
    document.cookie = cookieString;

    return newAccessToken;
  } catch (error) {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
  }
  return null;
};

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const url = config.url ?? "";
    const method = config.method?.toLocaleLowerCase();

    const noTokenURls = ["/", "/signin", "/signup", "/auth/refresh-token"];
    if (noTokenURls.includes(url)) {
      return config;
    }

    const articleGetPattern = /^\/articles(\/[^\/]+)?$/;
    if (method === "get" && articleGetPattern.test(url)) {
      const accessToken = getCookie("accessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    }

    const commentGetPattern = /^\/articles\/[^\/]+\/comments$/;
    if (method === "get" && commentGetPattern.test(url)) {
      return config;
    }
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshTokenReIssue();

        if (newAccessToken) {
          if (!originalRequest.headers) {
            originalRequest.headers = {};
          }
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        }

        const currentPath = window.location.pathname;
        if (currentPath !== "/signin") {
          window.location.href = "/signin";
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
