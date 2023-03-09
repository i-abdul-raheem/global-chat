import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastShow: false,
  toastMsg: "",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToastMsg: (state, action) => {
      state.toastMsg = action.payload;
    },
    setToastShow: (state, action) => {
      state.toastShow = action.payload;
    },
  },
});

export const { setToastMsg, setToastShow } = toastSlice.actions;

export default toastSlice.reducer;
