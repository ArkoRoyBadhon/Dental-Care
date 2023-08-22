import {
    createApi,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: "include",
  });
  
  export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["user", "notes"],
    endpoints: () => ({}),
  });