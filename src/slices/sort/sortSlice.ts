import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../Store';
import { SortState } from './types';

const initialState: SortState = {
  sort: '',
};
export const sortOptions = ['price', 'name'];

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string | null>) => {
      state.sort = action.payload;
    },
  },
});

export const selectSort = (state: RootState) => state.sort.sort;

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
