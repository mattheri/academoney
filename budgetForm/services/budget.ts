import httpClient, { type Http } from "@/http";
import type { BudgetEntry } from "../budget";

export class BudgetService {
  constructor(
    private readonly http: Http = httpClient,
    private readonly endpoint: "/users/{userId}/transactions"
  ) {}

  /*async getUser(id: number) {
    const { data } = await this.http.GET<Profile>(`${this.endpoint}/${id}`);

    return data;
  }*/

  async addBudgetEntry(
    id: number,
    budgetEntry: BudgetEntry
  ) {
    const date = budgetEntry.startDate
      ? new Date(budgetEntry.startDate).toDateString()
      : null;

    const { data } = await this.http.POST(`${this.endpoint}/${id}`, {
      body: JSON.stringify({
        ...budgetEntry,
        date,
        
      }),
    });

    return data;
  }
}
