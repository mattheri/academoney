import { Http } from "./services/Http";

export const httpClient = new Http({
  baseUrl: process.env.API_URL,
});
