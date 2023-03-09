import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./utils";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
  },
});
