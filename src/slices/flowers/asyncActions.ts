import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Flower, params } from "./types";

export const fetchFlowers = createAsyncThunk<
  Flower[],
  params | undefined,
  {
    rejectValue: string;
  }
>("flowers/fetchFlowers", async (params, { rejectWithValue }) => {
  const baseUrl = "https://std2rx.sse.codesandbox.io/flowers";
  let paramsUrl = "";
  for (const key in params) {
    paramsUrl = params[key as keyof params]
      ? `${paramsUrl}${key}=${params[key as keyof params]}&`
      : "";
  }
  const requestUrl = baseUrl.concat("?", paramsUrl);
  const response = await axios.get<Flower[]>(requestUrl);
  if (!response) {
    return rejectWithValue("Server Error!");
  }
  const data = response.data;
  return data;
});
