import type {
  HttpHeaders,
  HttpInit,
  HttpMethods,
  HttpRequestInitMap,
  HttpResponse,
  IHttp,
  ReqInit,
} from "../http";

export class Http implements IHttp {
  constructor(private init?: HttpInit) {}

  private logInfo(message: string) {
    console.info(`[Http Info][${new Date().toISOString()}] ${message}`);
  }

  private logError(message: string) {
    console.error(`[Http Error][${new Date().toISOString()}] ${message}`);
  }

  private handleUrl(reqInit: ReqInit) {
    let url =
      reqInit instanceof Request ? new URL(reqInit.url) : new URL(reqInit);

    if (this.init?.baseUrl) {
      url =
        reqInit instanceof Request
          ? new URL(reqInit.url, this.init.baseUrl)
          : new URL(reqInit, this.init.baseUrl);
    }

    return url;
  }

  private handleHeaders(headers: HttpHeaders) {
    return {
      ...headers,
      "Content-Type": "application/json",
      ...(this.init?.headers ?? {}),
    };
  }

  private handleBody(body?: unknown) {
    return body ? JSON.stringify(body) : null;
  }

  private onAbort(self: this) {
    return function (this: AbortSignal, ev: Event) {
      self.logInfo(`Request aborted, ${JSON.stringify(this.reason, null, 2)}`);
    };
  }

  private async unpackResponse<T>(
    response: Response
  ): Promise<HttpResponse<T>> {
    const { ok, status, statusText, headers } = response;
    try {
      if (!ok) throw new Error(`${status} - ${statusText}`);

      const json = (await response.json()) as T;
      const results: HttpResponse<T> = {
        data: json,
        headers,
        status,
        statusText,
      };
      this.logInfo(
        `Response ${status} - ${statusText} - ${JSON.stringify(
          results,
          null,
          2
        )}`
      );
      return results;
    } catch (e) {
      const error = e as Error;
      const results: HttpResponse<T> = {
        data: null,
        headers,
        status,
        statusText,
        error,
      };

      this.logError(
        `Response ${status} - ${statusText} - ${JSON.stringify(
          results,
          null,
          2
        )}`
      );
      return results;
    }
  }

  private createRequest<Method extends HttpMethods, T>(
    method: Method,
    url: ReqInit,
    init?: HttpRequestInitMap[Method]
  ) {
    const abortController = new AbortController();
    const signal = abortController.signal;
    signal.addEventListener("abort", this.onAbort(this));

    return {
      cancel: abortController.abort.bind(abortController),
      execute: async () => {
        const reqInit: RequestInit = {
          ...init,
          headers: this.handleHeaders(init?.headers),
          method,
          signal,
        };

        this.logInfo(`Requesting ${method} ${url}`);

        const body = this.handleBody(init && "body" in init && init.body);
        if (body) reqInit.body = body;

        const response = await fetch(this.handleUrl(url!), reqInit);
        return this.unpackResponse<T>(response);
      },
    };
  }

  GET<T>(url: ReqInit, init?: HttpRequestInitMap["GET"]) {
    return this.createRequest<"GET", T>("GET", url, init);
  }

  POST<T>(url: ReqInit, init?: HttpRequestInitMap["POST"]) {
    return this.createRequest<"POST", T>("POST", url, init);
  }

  PUT<T>(url: ReqInit, init?: HttpRequestInitMap["PUT"]) {
    return this.createRequest<"PUT", T>("PUT", url, init);
  }

  PATCH<T>(url: ReqInit, init?: HttpRequestInitMap["PATCH"]) {
    return this.createRequest<"PATCH", T>("PATCH", url, init);
  }

  DELETE<T>(url: ReqInit, init?: HttpRequestInitMap["DELETE"]) {
    return this.createRequest<"DELETE", T>("DELETE", url, init);
  }
}
