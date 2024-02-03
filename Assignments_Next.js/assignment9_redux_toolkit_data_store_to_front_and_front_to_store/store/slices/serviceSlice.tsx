import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "A.I",
    discription: "This is the AI",
};

export const counterSlice = createSlice({
  title: title,
  initialState: initialState,
  reducers: {
    createNew: (state) => { 
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     
    },
    updateNew: (state) => {
      state.title =  
    },
    incrementByAmount: (state, action) => {
      state.title = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createNew, updateNew, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
