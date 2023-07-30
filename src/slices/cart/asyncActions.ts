import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FlowerAtCart, AlreadyAtCart } from './types';

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

export const decreaseAmount = createAsyncThunk<
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
export const deleteFlower = createAsyncThunk<
  number,
  number,
  {
    rejectValue: string;
  }
>('flowersAtCart/deleteFlower', async (id, { rejectWithValue }) => {
  const response = await axios.delete(
    `https://t8ywpv.sse.codesandbox.io/cart/${id}`
  );
  if (!response) {
    return rejectWithValue('Server Error!');
  }
  return id;
});
