import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Flower, FlowersState } from './types';
import { RootState } from '../../Store';
import { fetchFlowers } from './asyncActions';

const initialState: FlowersState = {
  flowers: [],
  status: 'loading',
};

export const categories = ['all', 'indoor', 'outdoor'];

export const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchFlowers.fulfilled,
        (state, action: PayloadAction<Flower[]>) => {
          state.status = 'success';
          state.flowers = action.payload;
        }
      )
      .addCase(fetchFlowers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export const selectFlowers = (state: RootState) =>
  state.flowers.flowers;
export const selectStatus = (state: RootState) =>
  state.flowers.status;

export default flowersSlice.reducer;
