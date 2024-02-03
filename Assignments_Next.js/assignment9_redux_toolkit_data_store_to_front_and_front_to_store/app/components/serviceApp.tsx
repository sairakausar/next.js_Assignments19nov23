import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createNew, updateNew } from '@/store/slices/serviceSlice';


export function ServiceApp  ()  {
    const count = useSelector((state) => state.ServiceSlice.servicess);
    
    
    return <div>
        <div>


        </div>
        
    </div>;
}

