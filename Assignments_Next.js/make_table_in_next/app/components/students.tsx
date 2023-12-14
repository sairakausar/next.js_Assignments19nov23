import student from "../type/type";
import React from "react";

export default function Students() {
  const students = [
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
  return (
    <div>
      <table>
        <tr>
          <th style={{ border: "2px solid purple", width: "150px" }}>Name</th>
          <th style={{ border: "2px solid purple", width: "150px" }}>Gender</th>
          <th style={{ border: "2px solid purple", width: "150px" }}>Physics</th>
          <th style={{ border: "2px solid purple", width: "150px" }}>maths</th>
          <th style={{ border: "2px solid purple", width: "150px"}}>English</th>
        </tr>
      </table>
      {students.map((student: any) => {
        return (
          <div>
            <table style={{border:"2px solid purple"}}>
              <tr>
                <td style={{ border: "2px solid black", width: "150px" }}>
                  {student.name}
                </td>
                <td style={{border: "2px solid black", width:"150px"}}>
                  {student.gender}
                </td>
                <td style={{border: "2px solid black", width:"150px"}}>
                  {student.physics}
                </td>
                <td style={{border:"2px solid black", width:"150px"}}>
                  {student.maths}
                </td>
                <td style={{border:"2px solid black",width:"150px"}}>
                  {student.english}
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}
