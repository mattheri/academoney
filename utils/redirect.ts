import type { RedirectType } from "next/navigation";

import { redirect as nextredirect } from "next/navigation";

export const redirect = (url: string, type?: RedirectType) => {
  try {
    nextredirect(url, type);
  } catch (e) {
    const error = e as Error;
    if (error.message === "NEXT_REDIRECT") {
      throw error;
    }
    console.error("Error redirecting", error);
  }
};
