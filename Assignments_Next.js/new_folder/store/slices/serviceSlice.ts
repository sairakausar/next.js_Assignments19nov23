'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    servicess: [{
        id:1,
        title: "web and Mobile",
        description: "web and mobile App"
    }, {
        id:2,
        title: "A.I",
        description: " A.I Service"
    }]
}
export const ServiceSlice = createSlice({
    name: "service",
    initialState: initialState,
    reducers: {
        //for calling throuh dispatch
        createService: (state, action ) => {
            state.servicess = [...state.servicess, action.payload]
        },
        upDateService: (state, action) => {
            state.servicess = state.servicess.map((service) => {
                if (service.id === action.payload.id) {
                    return action.payload
                }    
                    return service                     
            })
        }
    }
})
export const {createService, upDateService} = ServiceSlice.actions
export default ServiceSlice.reducerPath