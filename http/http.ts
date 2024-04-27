export type HttpMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type ReqInit = RequestInfo;
export type HttpHeaders = RequestInit["headers"];

export type HttpRequestInitMap = {
  GET: Omit<RequestInit, "body"> & { method: "GET" };
  POST: RequestInit & { method: "POST" };
  PUT: RequestInit & { method: "PUT" };
  PATCH: RequestInit & { method: "PATCH" };
  DELETE: Omit<RequestInit, "body"> & { method: "DELETE" };
};

export type HttpRequest<Method extends HttpMethods> =
  HttpRequestInitMap[Method];

export type HttpInit = {
  baseUrl?: string | URL;
  headers?: HttpHeaders;
};

export type HttpResponse<T> = {
  data: T | null;
  status: number;
  statusText: string;
  headers: HttpHeaders;
  error?: Error;
};

export interface IHttp {
  /**
   * Method to initiate a GET request
   * Takes a generic type to define the shape of the response data
   *
   * @param url - The URL to make the request to, if a base URL is set in the Http instance, this will be appended to the base URL
   * @param init - The request options to pass to the fetch API
   *
   * @returns A promise that resolves to an HttpResponse object
   *
   * @example
   * ```ts
   * const request = await httpClient.GET<{ id: string }>(`/api/resource`);
   *
   * // If you need to cancel the request
   * request.cancel();
   *
   * console.log(await request.execute()) // { data: { id: "123" }, status: 200, statusText: "OK", headers: { ... } }
   * ```
   */
  GET: <T>(
    url: ReqInit,
    init?: HttpRequestInitMap["GET"]
  ) => {
    cancel: () => void;
    execute: () => Promise<HttpResponse<T>>;
  };
  /**
   * Method to initiate a POST request
   * Takes a generic type to define the shape of the response data
   * The body of the request will be serialized to JSON if it is an object
   *
   * @param url - The URL to make the request to, if a base URL is set in the Http instance, this will be appended to the base URL
   * @param init - The request options to pass to the fetch API
   * @returns A promise that resolves to an HttpResponse object
   *
   * @example
   * ```ts
   * const request = httpClient.POST<{ id: string }>(`/api/resource`, {
   *  body: { person: "Me" },
   * headers: {
   * "Content-Type": "application/json"
   * });
   *
   * // If you need to cancel the request
   * request.cancel();
   *
   * console.log(await request.execute()) // { data: { id: "123" }, status: 200, statusText: "OK", headers: { ... } }
   * ```
   */
  POST: <T>(
    url: ReqInit,
    init?: HttpRequestInitMap["POST"]
  ) => {
    cancel: () => void;
    execute: () => Promise<HttpResponse<T>>;
  };
  /**
   * Method to initiate a PUT request
   * Takes a generic type to define the shape of the response data
   * The body of the request will be serialized to JSON if it is an object
   *
   * @param url - The URL to make the request to, if a base URL is set in the Http instance, this will be appended to the base URL
   * @param init - The request options to pass to the fetch API
   * @returns A promise that resolves to an HttpResponse object
   *
   * @example
   * ```ts
   * const request = await httpClient.PUT<{ id: string }>(`/api/resource`, {
   *  body: { person: "Me" },
   * headers: {
   * "Content-Type": "application/json"
   * });
   *
   * // If you need to cancel the request
   * request.cancel();
   *
   * console.log(await request.execute()) // { data: { id: "123" }, status: 200, statusText: "OK", headers: { ... } }
   * ```
   */
  PUT: <T>(
    url: ReqInit,
    init?: HttpRequestInitMap["PUT"]
  ) => {
    cancel: () => void;
    execute: () => Promise<HttpResponse<T>>;
  };
  /**
   * Method to initiate a PATCH request
   * Takes a generic type to define the shape of the response data
   * The body of the request will be serialized to JSON if it is an object
   *
   * @param url - The URL to make the request to, if a base URL is set in the Http instance, this will be appended to the base URL
   * @param init - The request options to pass to the fetch API
   * @returns A promise that resolves to an HttpResponse object
   *
   * @example
   * ```ts
   * const request = await httpClient.PATHC<{ id: string }>(`/api/resource`, {
   *  body: { person: "Me" },
   * headers: {
   * "Content-Type": "application/json"
   * });
   *
   * // If you need to cancel the request
   * request.cancel();
   *
   * console.log(await request.execute()) // { data: { id: "123" }, status: 200, statusText: "OK", headers: { ... } }
   * ```
   */
  PATCH: <T>(
    url: ReqInit,
    init?: HttpRequestInitMap["PATCH"]
  ) => {
    cancel: () => void;
    execute: () => Promise<HttpResponse<T>>;
  };
  /**
   * Method to initiate a DELETE request
   * Takes a generic type to define the shape of the response data
   * The body of the request will be serialized to JSON if it is an object
   *
   * @param url - The URL to make the request to, if a base URL is set in the Http instance, this will be appended to the base URL
   * @param init - The request options to pass to the fetch API
   * @returns A promise that resolves to an HttpResponse object
   *
   * @example
   * ```ts
   * const request = await httpClient.DELETE<{ id: string }>(`/api/resource`, {
   *  body: { person: "Me" },
   * headers: {
   * "Content-Type": "application/json"
   * });
   *
   * // If you need to cancel the request
   * request.cancel();
   *
   * console.log(await request.execute()) // { data: { id: "123" }, status: 200, statusText: "OK", headers: { ... } }
   * ```
   */
  DELETE: <T>(
    url: ReqInit,
    init?: HttpRequestInitMap["DELETE"]
  ) => {
    cancel: () => void;
    execute: () => Promise<HttpResponse<T>>;
  };
}
