'use client'

import Image from 'next/image'
import ExpenseList from "./expenseList/expenseList";
import ExpenseModal from './expenseList/expenseModel';
//4)
export default function Home() {

 


  return (
    <main>
      <h1>Expense Tracker App</h1>
      {/* //6 */}
      <ExpenseList
        expenses={[
          {
            id: "5",
            amount: 12345,
            note: "this is note",
            category: "male, female",
            date: "24-12-2023",
          },
        ]}
      />
      {/* //8 */}
      {/* {.^  6} */}
    
    
    </main>
  );
}
