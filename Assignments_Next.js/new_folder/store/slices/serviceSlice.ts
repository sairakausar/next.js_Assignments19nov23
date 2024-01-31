'use client'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    servicess: [{
        title: "web and Mobile",
        description: "web and mobile App"
    }, {
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
            
        }
    }
    
       
    
})
 


export default ServiceSlice