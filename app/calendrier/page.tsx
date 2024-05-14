import { cookies } from "next/headers";

import { Transaction } from "@/auth";
import type { Month } from "@/calendar/calendar";
import Calendar from "@/calendar/components/Calendar";
import appConstants from "@/contants";
import httpClient from "@/http";
import { PageProps } from "@/utils/types";

type Params = {};

type SearchParams = {
  month?: string;
  year?: string;
};

const CalendarPage = async ({
  searchParams,
}: PageProps<Params, SearchParams>) => {
  const now = new Date();
  const month = (Number(searchParams?.month) || now.getMonth() + 1) as Month;
  const year = Number(searchParams?.year) || now.getFullYear();

  const sessionCookie = cookies().get(appConstants.USER_ID_COOKIE);
  const userId = JSON.parse(sessionCookie!.value) as number;
  const transactions = await httpClient.GET<Transaction[]>(
    `/users/${userId}/transactions`
  );

  return (
    <main>
      <Calendar events={transactions.data} month={month} year={year} />
    </main>
  );
};

export default CalendarPage;
