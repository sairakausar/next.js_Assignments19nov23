import React from 'react'
import { useSelector } from 'react-redux';




export function ServiceApp  ()  {
    const StoreDataComeFromStoreWithRedux = useSelector((state) => state.ServiceSlice.servicess);
 

    
    return (
      <div>
            <div>{StoreDataComeFromStoreWithRedux.map((TakeOneService) => {
                return (
                    <>
                    <div>
                        {TakeOneService.title}
                    </div>
                    <div>
                             {TakeOneService.discription}
                        </div>
                        </>

                );
                
        })}</div>
      </div>
    );
}

