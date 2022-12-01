import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", credentials);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    },
);

export const logIn = createAsyncThunk(

);

export const logOut = createAsyncThunk(

);