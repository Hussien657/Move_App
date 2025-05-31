import { createSlice } from "@reduxjs/toolkit";

const langugeSlice = createSlice({

    name: "lan",
    initialState: {
        lan: "ar",
    },

    reducers: {
        togel: (state) => {
            if (state.lan == "en")
                state.lan = "ar"
            else
                state.lan = "en"
        }
    }

})
export default langugeSlice.reducer
export  const  {togel } = langugeSlice.actions 
