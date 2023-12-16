"use client";

import { useState } from "react";
import MyButton from "../button/button";

export default function CounterFunction() {

    let [count, setCount] = useState(0)

    // let count = 0

    let addition_finction = () => {
        setCount(count+1);
        
        // count = count + 1
        // console.log(count)
    }
    let subtract_function = () => {
              setCount(count-1)
    }

  return (
    <>
      <div>Counter Function Clinet site below</div>

          <MyButton button_title="Add" button_function={addition_finction} />
      {count}
          <MyButton button_title="Minus" button_function={subtract_function} />
    </>
  );
}
