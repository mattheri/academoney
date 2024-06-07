"use server"
import { Transaction } from "@/auth";
import httpClient from "@/http";
import { getUserId } from "@/utils/getUserId";
import { useEffect, useState } from "react";

export const getAllTransactions = async () => {

  const userId = getUserId();

  try{
    const { data } = await httpClient.GET<Transaction[]>(`/users/${userId}/transactions`);
    return (data);
  } catch (error) {
    console.error("Error getting transaction:", error);
  }
}