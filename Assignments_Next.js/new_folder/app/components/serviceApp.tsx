'use client'



import { useSelector } from "react-redux"
// import UpdateAndRemoveData from "./updateAndRemoveData"
import UpdateForm from "./updateForm"

export default function ServiceApp() {
       const allServicess     = useSelector((store) => store.serviceSlice.servicess)
    
    return (<div>
        {allServicess.map((oneService: any) => {
            return (
              <div>
                    {oneService.title}
                    {'   '}
                {oneService.description}
              </div>
            );           
        })}
        {/* <UpdateAndRemoveData /> */}
        <UpdateForm />
    </div>
    )
}


    
    
    
    
    
    

