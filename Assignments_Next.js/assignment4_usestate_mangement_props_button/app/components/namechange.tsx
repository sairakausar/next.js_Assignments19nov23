'use client'
import React from 'react'
import MyButton from './button';
import studentType from './type/type';


export default function NameChange() {
  const students : studentType[] = [
    {
      name: "arun",
      gender: "Male",
      physics: 88,
      maths: 87,
      english: 78,
    },
    {
      name: "rajesh",
      gender: "Male",
      physics: 96,
      maths: 100,
      english: 95,
    },
    {
      name: "moorthy",
      gender: "Male",
      physics: 89,
      maths: 90,
      english: 70,
    },
    {
      name: "raja",
      gender: "Male",
      physics: 30,
      maths: 25,
      english: 40,
    },
    {
      name: "usha",
      gender: "Female",
      physics: 67,
      maths: 45,
      english: 78,
    },
    {
      name: "priya",
      gender: "Female",
      physics: 56,
      maths: 46,
      english: 78,
    },
    {
      name: "Sundar",
      gender: "Male",
      physics: 12,
      maths: 67,
      english: 67,
    },
    {
      name: "Kavitha",
      gender: "Female",
      physics: 78,
      maths: 71,
      english: 67,
    },
    {
      name: "Dinesh",
      gender: "Male",
      physics: 56,
      maths: 45,
      english: 67,
    },
    {
      name: "Hema",
      gender: "Female",
      physics: 71,
      maths: 90,
      english: 23,
    },
    {
      name: "Gowri",
      gender: "Female",
      physics: 100,
      maths: 100,
      english: 100,
    },
    {
      name: "Ram",
      gender: "Male",
      physics: 78,
      maths: 55,
      english: 47,
    },
    {
      name: "Murugan",
      gender: "Male",
      physics: 34,
      maths: 89,
      english: 78,
    },
    {
      name: "Jenifer",
      gender: "Female",
      physics: 67,
      maths: 88,
      english: 90,
    },
  ];

  const []

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
