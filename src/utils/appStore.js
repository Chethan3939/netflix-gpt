import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the user slice reducer

const appStore = configureStore({
    reducer: {
        user : userReducer

    }
});

export default appStore;