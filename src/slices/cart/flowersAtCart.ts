import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { FlowerAtCart, FlowersAtCartState, AlreadyAtCart } from "./types";
import { RootState } from "../../Store";

const initialState: FlowersAtCartState = {
  flowersAtCart: [],
  status: "loading",
};

export const addToCartAsync = createAsyncThunk<
  FlowerAtCart,
  FlowerAtCart,
  {
    rejectValue: string;
  }
>("flowersAtCart/fetchFlowersAtCart", async (flower, { rejectWithValue }) => {
  const response = await axios.post<FlowerAtCart>(
    `https://t8ywpv.sse.codesandbox.io/cart/`,
    flower
  );
  if (!response) {
    return rejectWithValue("Server Error!");
  }
  const data = response.data;
  console.log(data);
  return data;
});

export const increaseAmount = createAsyncThunk<
  AlreadyAtCart,
  AlreadyAtCart,
  {
    rejectValue: string;
  }
>(
  "flowersAtCart/increaseAmount",
  async (alreadyAtCart, { rejectWithValue }) => {
    const response = await axios.patch<FlowerAtCart>(
      `https://t8ywpv.sse.codesandbox.io/cart/`,
      alreadyAtCart
    );
    if (!response) {
      return rejectWithValue("Server Error!");
    }
    const data = response.data;
    return data;
  }
);

export const flowersAtCart = createSlice({
  name: "flowersAtCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        addToCartAsync.fulfilled,
        (state, action: PayloadAction<FlowerAtCart>) => {
          state.status = "success";
          console.log(state.flowersAtCart);
          // --------- тут ошибка
          // state.flowersAtCart = state.flowersAtCart.push(action.payload);
        }
      )
      .addCase(addToCartAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const selectFlowersAtCart = (state: RootState) =>
  state.flowersAtCart.flowersAtCart;
export const selectStatus = (state: RootState) => state.flowersAtCart.status;

export default flowersAtCart.reducer;
