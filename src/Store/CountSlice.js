import { createSlice } from "@reduxjs/toolkit";

const countSlise = createSlice({
    initialState: {
        move :[]
    },
    name: "fav",
    reducers: {
        increice: (state, action) => {
            if (!state.move.some((film) => {
                return film.id == action.payload.id
            }
            )) 

            state.move.push(action.payload)

            
        },

        remove1: (state, action) => {
            console.log(action)
            const index = state.move.findIndex((move) => move.id === action.payload);
            if (index !== -1) {
                state.move.splice(index, 1);
            }
              
          }


    }


})
export default countSlise.reducer
export const { increice, remove1 } = countSlise.actions
