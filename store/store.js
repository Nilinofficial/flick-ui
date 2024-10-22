import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import feedUserReducer from "../slices/feedUserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feedUser: feedUserReducer,
  },
});

export default store;
