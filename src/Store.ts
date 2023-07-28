import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import inputSLice from "./slices/inputSLice";
import flowersSlice from "./slices/flowers/flowersSlice";
import flowersAtCart from "./slices/cart/flowersAtCart";

export const store = configureStore({
  reducer: {
    input: inputSLice,
    flowers: flowersSlice,
    flowersAtCart: flowersAtCart,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
