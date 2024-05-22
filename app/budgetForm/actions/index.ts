"use server"

import httpClient from "@/http";
import type { BudgetEntry } from "../budget";

export const addBudgetEntry = async (formDataBudget: FormData) => {
  const budgetEntry: BudgetEntry = {
    startDate: String(formDataBudget.get("startDate")),
    description: String(formDataBudget.get("description")),
    category: String(formDataBudget.get("category")),
    amount: Number(formDataBudget.get("amount")),
    type: String(formDataBudget.get("type")),
    id: Number(formDataBudget.get("id"))
  };
 
  
  

  const id = String(formDataBudget.get("id"));

    const { data } = await httpClient.POST(`/users/${id}/transactions`, {
      body: JSON.stringify({
        ...budgetEntry,
        date: budgetEntry.startDate ? new Date(budgetEntry.startDate).toDateString() : null,
      }),
    });

      console.log(data)
}