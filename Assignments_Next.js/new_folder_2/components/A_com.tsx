import React, {createContext}  from 'react'
import B_com from './B_com';
import D_com from './D_com';
 const any_props = createContext('');

const A_com = () => {

    return (
      <>
        <div>A_com</div>

        <any_props.Provider value="bg-red-500">
          <B_com />
          <D_com />
        </any_props.Provider>
      </>
    );
}

export { A_com, any_props }