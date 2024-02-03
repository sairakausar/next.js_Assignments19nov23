import React from 'react'
import { configureStore } from "@reduxjs/toolkit";

const ServiceSlice = configureStore({
    
    reducer: {
        title: "A.I",
        discription: "web 3.0",
         
    }
 
}
);

export default ServiceSlice

