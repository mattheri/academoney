import appConstants from "@/contants";
import { cookies } from "next/headers";

export const getUserId = () => {
  const session = cookies().get(appConstants.USER_ID_COOKIE);
  const userId = JSON.parse(session!.value) as number;

  return userId;
};
