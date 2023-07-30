import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import inputSLice from './slices/input/inputSLice';
import flowersSlice from './slices/flowers/flowersSlice';
import flowersAtCartSlice from './slices/cart/flowersAtCart';
import sortSlice from './slices/sort/sortSlice';

export const store = configureStore({
  reducer: {
    input: inputSLice,
    flowers: flowersSlice,
    flowersAtCart: flowersAtCartSlice,
    sort: sortSlice,
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
