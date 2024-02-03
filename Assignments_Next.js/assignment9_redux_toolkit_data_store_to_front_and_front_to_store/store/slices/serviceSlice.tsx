'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servicess: [
    {
      id:1,
  title: "A.I",
  discription: "This is the AI"
    }, {
      id:2,
      title: "web 3",
      discription: "This is web 3.0"
    }
  ]
};

export const ServiceSlice = createSlice({
  name: "title",
  initialState: initialState,
  reducers: {
    createNew: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.servicess = [...state.servicess, action.payload];
    },
    updateNew: (state, action) => {
      state.servicess = state.servicess.map((service) => {
        if (service.id === action.payload.id) {
          return action.payload;
        }
        return service;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { createNew, updateNew } = ServiceSlice.actions

export default ServiceSlice.reducer
