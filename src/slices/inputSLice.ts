import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InpuState {
  search: string;
}

const initialState: InpuState = {
  search: "",
};

export const inputSLice = createSlice({
  name: "input",
  initialState,
  reducers: {
    handleChange(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setInputedValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { handleChange, setInputedValue } = inputSLice.actions;

export default inputSLice.reducer;
