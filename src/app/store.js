import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "../features/userDetails/userDetailsSlice";

export const store = configureStore({
    reducer: {
        userDetails: userDetailsReducer,
    },
});
