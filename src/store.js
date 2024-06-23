import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./protect routes/features/AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default store;
