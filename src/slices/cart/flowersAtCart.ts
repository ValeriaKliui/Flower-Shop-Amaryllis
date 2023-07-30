import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FlowerAtCart,
  FlowersAtCartState,
  AlreadyAtCart,
} from './types';
import { RootState } from '../../Store';
import {
  addToCartAsync,
  fetchFlowersAtCart,
  increaseAmount,
  deleteFlower,
  cleanCart,
} from './asyncActions';

const initialState: FlowersAtCartState = {
  flowersAtCart: [],
  status: 'loading',
};

export const flowersAtCart = createSlice({
  name: 'flowersAtCart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowersAtCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchFlowersAtCart.fulfilled,
        (state, action: PayloadAction<FlowerAtCart[]>) => {
          state.status = 'success';
          state.flowersAtCart = action.payload;
        }
      )
      .addCase(fetchFlowersAtCart.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        addToCartAsync.fulfilled,
        (state, action: PayloadAction<FlowerAtCart>) => {
          state.status = 'success';
          state.flowersAtCart = [
            ...state.flowersAtCart,
            action.payload,
          ];
        }
      )
      .addCase(addToCartAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(increaseAmount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        increaseAmount.fulfilled,
        (state, action: PayloadAction<AlreadyAtCart>) => {
          state.status = 'success';
          state.flowersAtCart = state.flowersAtCart.map((item) =>
            item.id === action.payload.id
              ? { ...item, amount: action.payload.amount }
              : item
          );
        }
      )
      .addCase(increaseAmount.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(deleteFlower.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        deleteFlower.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.status = 'success';
          state.flowersAtCart = state.flowersAtCart.filter(
            (e) => e.id !== action.payload
          );
        }
      )
      .addCase(deleteFlower.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(cleanCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(cleanCart.fulfilled, (state) => {
        state.status = 'success';
        state.flowersAtCart = [];
      })
      .addCase(cleanCart.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export const selectFlowersAtCart = (state: RootState) =>
  state.flowersAtCart.flowersAtCart;
export const selectStatus = (state: RootState) =>
  state.flowersAtCart.status;

export default flowersAtCart.reducer;
