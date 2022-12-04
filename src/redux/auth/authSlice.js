import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register, refreshUser } from "./authOperations";

const initialState = {
    user: { name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.pending](state) {
        state.error = null;
        state.isLoading = true;
      },
      [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      },
      [register.rejected](state, action) {
        state.error = action.payload;
        state.isLoading = false;
      },
      [logIn.pending](state) {
        state.error = null;
        state.isLoading = true;
      },
      [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [logIn.rejected](state, action) {
        state.error = action.payload;
        state.isLoading = false;
      },
      [logOut.pending](state) {
        state.error = null;
        state.isLoading = true;
      },
  
      [logOut.fulfilled](state) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
      [logOut.rejected](state, action) {
        state.error = action.payload;
        state.isLoading = false;
      },
      [refreshUser.pending](state) {
        state.isRefreshing = true;
      },
      [refreshUser.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      },
      [refreshUser.rejected](state) {
        state.isRefreshing = false;
      },
    },
  });
  
  export const authReducer = authSlice.reducer;