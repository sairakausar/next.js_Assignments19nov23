import React from 'react'
import ServiceSlice from './slices/serviceSlice'

import { configureStore } from '@reduxjs/toolkit'

export const Store = configureStore({
    reducer: {
      ServiceSlice: ServiceSlice,
  },
})
