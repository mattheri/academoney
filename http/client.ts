import { Http } from "./services/Http";

export const httpClient = new Http({
  baseURL: process.env.API_URL,
});
