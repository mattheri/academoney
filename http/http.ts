import type { AxiosError, AxiosResponse, CreateAxiosDefaults } from "axios";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type HttpResponse<T> = Pick<
  AxiosResponse<T>,
  "data" | "status" | "statusText" | "headers"
>;
export type HttpInit = CreateAxiosDefaults;
export type HttpRequestInitObject = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export type HttpRequestInitMap = {
  [HttpMethod.GET]: Omit<HttpRequestInitObject, "method" | "body">;
  [HttpMethod.POST]: Omit<HttpRequestInitObject, "method">;
  [HttpMethod.PUT]: Omit<HttpRequestInitObject, "method">;
  [HttpMethod.PATCH]: Omit<HttpRequestInitObject, "method">;
  [HttpMethod.DELETE]: Omit<HttpRequestInitObject, "method">;
};
export type HttpRequestInit<T extends HttpMethod> = HttpRequestInitMap[T];
export type CancellableHttpResponse<T> = HttpResponse<T> & {
  cancel: () => void;
};

export type HttpError = AxiosError;
