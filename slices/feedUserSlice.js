import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedUser: null,
};

const feedUserSlice = createSlice({
  name: "feedUser",
  initialState,
  reducers: {
    addFeedUser: (state, action) => {
      state.feedUser = action.payload;
    },
    removeFeedUser: (state) => {
      state.feedUser = null;
    },
  },
});

export const { addFeedUser, removeFeedUser } = feedUserSlice.actions;
export default feedUserSlice.reducer;
