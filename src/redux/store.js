import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

