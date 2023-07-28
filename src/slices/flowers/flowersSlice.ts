import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Flower, FlowersState } from "./types";
import { RootState } from "../../Store";

const initialState: FlowersState = {
  flowers: [],
  status: "loading",
};

export const fetchFlowers = createAsyncThunk<
  Flower[],
  undefined,
  {
    rejectValue: string;
  }
>("flowers/fetchFlowers", async (_, { rejectWithValue }) => {
  const response = await axios.get<Flower[]>(
    `https://t8ywpv.sse.codesandbox.io/flowers`
  );
  if (!response) {
    return rejectWithValue("Server Error!");
  }
  const data = response.data;
  return data;
});

export const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFlowers.fulfilled,
        (state, action: PayloadAction<Flower[]>) => {
          state.status = "success";
          state.flowers = action.payload;
        }
      )
      .addCase(fetchFlowers.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const selectFlowers = (state: RootState) => state.flowers.flowers;
export const selectStatus = (state: RootState) => state.flowers.status;

export default flowersSlice.reducer;
