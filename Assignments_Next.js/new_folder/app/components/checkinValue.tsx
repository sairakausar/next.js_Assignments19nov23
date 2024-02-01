'use client'
import React from 'react'
import { useSelector } from 'react-redux';


const CheckinValue = () => {
    const CheckingCount = useSelector((store)=>store.counterSlice.count) 
    return ( 
        <div>
          After  update File Thing for check {"   "}
        {CheckingCount}
    </div>
    )
}

export default CheckinValue;