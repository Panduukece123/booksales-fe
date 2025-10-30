import { API } from "../_api";

import React from "react";

export const getUsers = async () => {
  const { data } = await API.get("/users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(`accesToken`)}`,
    },
  });
  console.log('data ' , data)
  return data.data
};