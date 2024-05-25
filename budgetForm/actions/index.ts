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

    try{
      const { data } = await httpClient.POST(`/users/${id}/transactions`, {
        body: JSON.stringify({
          ...budgetEntry,
          date: budgetEntry.startDate ? new Date(budgetEntry.startDate).toISOString() : null,
        }),

        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data)
      
    } catch (error) {
      console.error("Error adding budget entry:", error);
    }

     
}