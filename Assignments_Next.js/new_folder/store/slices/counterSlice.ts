import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'CounterApp',
    initialState: {
        //state
        
        count: 1,
    },
    reducers: {
        // Action 
        // action have State
        increment: (state) => {
            state.count = state.count + 1 
        },
        decrement: (state) => {
            state.count = state.count - 1
        }
    }

})
export const { increment, decrement } = counterSlice.actions 

export default counterSlice.reducer