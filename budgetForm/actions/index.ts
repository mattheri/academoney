"use server"

import httpClient from "@/http";
import type { BudgetEntry, User } from "../budget";
//import axios from "axios";
//import constants from "constants";

export const addBudgetEntry = async (formDataBudget: FormData) => {
  const id = String(formDataBudget.get("id"));

  const user: User = {
    id: Number(formDataBudget.get("userId")),
    firstName: String(formDataBudget.get("firstName")),
    lastName: String(formDataBudget.get("lastName")),
    birthDate: String(formDataBudget.get("birthDate")),
    isActive: formDataBudget.get("isActive") === "true",
    email: String(formDataBudget.get("email")),
    password: String(formDataBudget.get("password")),
    // Ajoutez d'autres propriétés si nécessaire
  };
  
  const budgetEntry: BudgetEntry = {
    id: Number(formDataBudget.get("id")),
    description: String(formDataBudget.get("description")),
    category: String(formDataBudget.get("category")),
    amount: Number(formDataBudget.get("amount")),
    type: String(formDataBudget.get("type")),
    isDone: formDataBudget.get("isDone") === "true",
    startDate: String(formDataBudget.get("startDate")),
    endDate: formDataBudget.get("endDate") ? String(formDataBudget.get("endDate")) : null,
    frequency: Number(formDataBudget.get("frequency")),
    user: user,
    
  };
 
  
  

  

    try{
      const { data } = await httpClient.POST(`/users/${id}/transactions`, {
        /*body: {
          ...budgetEntry,
          date: budgetEntry.startDate ? new Date(budgetEntry.startDate).toISOString().slice(0,10) : null,
        },*/
        body: JSON.stringify(budgetEntry),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data)
      
    } catch (error) {
      console.error("Error adding budget entry:", error);
    }

     
}