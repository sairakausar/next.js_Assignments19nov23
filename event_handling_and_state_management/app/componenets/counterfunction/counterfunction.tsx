"use client";

import { log } from "console";
import MyButton from "../button/button";

export default function CounterFunction() {

    let count = 0

    let addition = () => {
        count = count + 1
        console.log(count)
    }

  return (
    <>
      <div>Counter Function</div>
      {count}
      <MyButton title="Add One" funtionTitle={addition} />
    </>
  );
}
