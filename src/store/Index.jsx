import { configureStore } from "@reduxjs/toolkit";
import users  from "./slices/UserSlices";
const store = configureStore({
    reducer:{
        user:users,
    }
})
export  default store;
