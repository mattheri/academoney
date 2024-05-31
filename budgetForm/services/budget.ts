/*import httpClient, { type Http } from "@/http";
import type { BudgetEntry } from "../budget";

export class BudgetService {
  private endpoint: string; 

  
  constructor(private readonly http: Http = httpClient) {
    this.endpoint = "/users";
  }

  async getUser(id: number) {
    const { data } = await this.http.GET<BudgetEntry>(`${this.endpoint}/${id}/transactions`);

    return data;
  }

  /*async addBudgetEntry(
    id: number,
    budgetEntry: BudgetEntry
  ) {
    const date = budgetEntry.startDate
      ? new Date(budgetEntry.startDate).toDateString()
      : null;

    const { data } = await this.http.POST(`${this.endpoint}/${id}/transactions`, {
      body: JSON.stringify({
        ...budgetEntry,
        date,
        
      }),
    });

    return data;
  }*/

