import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  FlowerAtCart,
  FlowersAtCartState,
  AlreadyAtCart,
} from './types';
import { RootState } from '../../Store';

const initialState: FlowersAtCartState = {
  flowersAtCart: [],
  status: 'loading',
};

export const fetchFlowersAtCart = createAsyncThunk<
  FlowerAtCart[],
  undefined,
  {
    rejectValue: string;
  }
>('flowers/fetchFlowersAtCart', async (_, { rejectWithValue }) => {
  const response = await axios.get<FlowerAtCart[]>(
    `https://t8ywpv.sse.codesandbox.io/cart`
  );
  if (!response) {
    return rejectWithValue('Server Error!');
  }
  const data = response.data;
  return data;
});

export const addToCartAsync = createAsyncThunk<
  FlowerAtCart,
  FlowerAtCart,
  {
    rejectValue: string;
  }
>(
  'flowersAtCart/addToCartAsync',
  async (flower, { rejectWithValue }) => {
    delete flower.id;
    const response = await axios.post<FlowerAtCart>(
      `https://t8ywpv.sse.codesandbox.io/cart/`,
      flower
    );
    if (!response) {
      return rejectWithValue('Server Error!');
    }
    const data = response.data;
    return data;
  }
);

export const increaseAmount = createAsyncThunk<
  AlreadyAtCart,
  AlreadyAtCart,
  {
    rejectValue: string;
  }
>(
  'flowersAtCart/increaseAmount',
  async (alreadyAtCart, { rejectWithValue }) => {
    const response = await axios.patch<AlreadyAtCart>(
      `https://t8ywpv.sse.codesandbox.io/cart/${alreadyAtCart.id}`,
      alreadyAtCart
    );
    if (!response) {
      return rejectWithValue('Server Error!');
    }
    const data = response.data;
    return data;
  }
);

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
      });
    builder
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
      });
    builder
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
      });
  },
});
export const selectFlowersAtCart = (state: RootState) =>
  state.flowersAtCart.flowersAtCart;
export const selectStatus = (state: RootState) =>
  state.flowersAtCart.status;

export default flowersAtCart.reducer;
