/* This code snippet is a piece of a Redux toolkit implementation in JavaScript. Here's a breakdown of
what it does: */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "./postApi";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  const data = await getApi();
  return data;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isError = true;
      });
  },
});

export default postSlice.reducer;
