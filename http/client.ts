import constants from "@/contants";

import { Http } from "./services/Http";

export const httpClient = new Http({
  baseURL: constants.API_URL,
});
