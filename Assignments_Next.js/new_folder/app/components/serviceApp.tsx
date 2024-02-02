'use client'

import { createService, upDateService } from "@/store/slices/serviceSlice"

import { useSelector } from "react-redux"

export default function ServiceApp() {
       const allServicess     = useSelector((store) => store.serviceSlice.servicess)
    
    return (<div>
        {allServicess.map((oneService: any) => {
            return(
                <div>                
                 {oneService.title}
            </div>)           
        }) }
    </div>)
}


    
    
    
    
    
    

