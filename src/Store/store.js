import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./CountSlice";
import langreduser from "./langugeSlice"

const store = configureStore(
    {
        reducer: {
            star:countReducer,
            forlunguge: langreduser,
            
        }
    }
)
export default store;