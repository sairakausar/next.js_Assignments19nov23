'use client'
import React from 'react'
import MyButton from './button';


export default function NameChange() {
  return (
    <div>
      NameChange , I am cliend component and below button are my child and They
      are also a clients
      <MyButton
        MyButtonStyle={{ background: "red" }}
        MyclassButton="py-2 m-10"
        titleButton="Previous"
      />
      <br />
      <br />
      <MyButton
        MyButtonStyle={{ background: "green" }}
        MyclassButton="p-3 m-10"
        titleButton="Next"
      />
    </div>
  );
}
