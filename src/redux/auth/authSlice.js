import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null},
        token: null,
        isLoggedIn: false,
    },
    extraReducers: {

    },
});