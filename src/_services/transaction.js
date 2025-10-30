import { API } from "../_api";

import React from "react";

export const getTransactions = async () => {
  const { data } = await API.get("/transactions", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(`accesToken`)}`,
    },
  });
  console.log('data ' , data)
  return data.data
};

export const createTransaction = async (data) => {
  try {
    const response = await API.post("/transactions", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

