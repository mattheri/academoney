import type { AxiosResponse, CreateAxiosDefaults } from "axios";

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

export type HttpRequestInitMap = {
  [HttpMethod.GET]: Omit<RequestInit, "method" | "body">;
  [HttpMethod.POST]: Omit<RequestInit, "method">;
  [HttpMethod.PUT]: Omit<RequestInit, "method">;
  [HttpMethod.PATCH]: Omit<RequestInit, "method">;
  [HttpMethod.DELETE]: Omit<RequestInit, "method">;
};
export type HttpRequestInit<T extends HttpMethod> = HttpRequestInitMap[T];
export type CancellableHttpResponse<T> = HttpResponse<T> & {
  cancel: () => void;
};
