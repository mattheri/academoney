import type { AxiosInstance } from "axios";
import axios from "axios";

import type {
  CancellableHttpResponse,
  HttpInit,
  HttpRequestInit,
} from "../http";
import { HttpMethod } from "../http";

export class Http {
  private instance: AxiosInstance;

  constructor(private init?: HttpInit) {
    this.instance = axios.create(init);

    this.instance.interceptors.request.use(
      (config) => {
        this.logInfo(`Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        this.logError(`Request error: ${error.message}`);
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        this.logInfo(
          `Response: ${
            response.status
          } ${response.config.method?.toUpperCase()} ${response.config.url}`
        );
        return response;
      },
      (error) => {
        this.logError(`Response error: ${error.message}`);
        return Promise.reject(error);
      }
    );
  }

  private logInfo(message: string) {
    console.info(`[Http] [${new Date().toISOString()}] ${message}`);
  }

  private logError(message: string) {
    console.error(`[Http] [${new Date().toISOString()}] ${message}`);
  }

  private get baseUrl() {
    return this.instance.defaults.baseURL;
  }

  private handeUrl(url: RequestInfo | URL) {
    let urlStr: string;
    const baseUrl = this.baseUrl;

    if (url instanceof URL) {
      urlStr = url.toString();
    } else if (url instanceof Request) {
      urlStr = url.url;
    } else {
      urlStr = url;
    }

    if (!baseUrl) return urlStr;

    const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    const path = urlStr.startsWith("/") ? urlStr.slice(1) : urlStr;

    return `${base}/${path}`;
  }

  private handleInit<T extends HttpMethod>(
    init?: HttpRequestInit<T>,
    signal?: AbortSignal
  ) {
    if (!init) return {};

    const headers = new Headers(init.headers);

    return {
      ...init,
      headers,
      data: "body" in init ? init.body : undefined,
      signal,
    };
  }

  private async request<T>(
    method: HttpMethod,
    info: RequestInfo | URL,
    init?: HttpRequestInit<HttpMethod>,
    signal?: AbortSignal
  ) {
    const response = await this.instance.request<T>({
      url: this.handeUrl(info),
      ...this.handleInit(init, signal),
      method,
    });

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  }

  async GET<T>(
    info: RequestInfo | URL,
    init?: HttpRequestInit<HttpMethod.GET>
  ): Promise<CancellableHttpResponse<T>> {
    const controller = new AbortController();
    const { signal } = controller;

    return {
      cancel: () => controller.abort(),
      ...(await this.request<T>(HttpMethod.GET, info, init, signal)),
    };
  }

  async POST<T>(
    info: RequestInfo | URL,
    init?: HttpRequestInit<HttpMethod.POST>
  ): Promise<CancellableHttpResponse<T>> {
    const controller = new AbortController();
    const { signal } = controller;

    return {
      cancel: () => controller.abort(),
      ...(await this.request<T>(HttpMethod.POST, info, init, signal)),
    };
  }

  async PUT<T>(
    info: RequestInfo | URL,
    init?: HttpRequestInit<HttpMethod.PUT>
  ): Promise<CancellableHttpResponse<T>> {
    const controller = new AbortController();
    const { signal } = controller;

    return {
      cancel: () => controller.abort(),
      ...(await this.request<T>(HttpMethod.PUT, info, init, signal)),
    };
  }

  async PATCH<T>(
    info: RequestInfo | URL,
    init?: HttpRequestInit<HttpMethod.PATCH>
  ): Promise<CancellableHttpResponse<T>> {
    const controller = new AbortController();
    const { signal } = controller;

    return {
      cancel: () => controller.abort(),
      ...(await this.request<T>(HttpMethod.PATCH, info, init, signal)),
    };
  }

  async DELETE<T>(
    info: RequestInfo | URL,
    init?: HttpRequestInit<HttpMethod.DELETE>
  ): Promise<CancellableHttpResponse<T>> {
    const controller = new AbortController();
    const { signal } = controller;

    return {
      cancel: () => controller.abort(),
      ...(await this.request<T>(HttpMethod.DELETE, info, init, signal)),
    };
  }
}
