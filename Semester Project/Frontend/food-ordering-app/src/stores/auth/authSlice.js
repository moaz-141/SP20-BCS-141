import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const getUser = (state) => state.user;

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
