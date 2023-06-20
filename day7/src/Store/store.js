import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "../Features/noteSlice";

const store = configureStore({
  reducer: {
    notes: noteSlice,
  },
});

export default store;