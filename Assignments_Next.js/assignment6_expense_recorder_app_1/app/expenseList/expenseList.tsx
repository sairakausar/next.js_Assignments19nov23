// ExpenseList.js

import { ExpensePropType } from "../types/componentsType";

import React from "react";
//1)   //2) error rmove with the chage type and also include type in separate
//type folder
const ExpenseList = ({ expenses }: {expenses: ExpensePropType[]}) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b p-2">ID</th>
            <th className="border-b p-2">Amount</th>
            <th className="border-b p-2">Category</th>
            <th className="border-b p-2">Note</th>
            <th className="border-b p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense: any) => (
            <tr key={expense.id} className="hover:bg-gray-100">
              <td className="border-b p-2">{expense.id}</td>
              <td className="border-b p-2">{expense.amount}</td>
              <td className="border-b p-2">{expense.category}</td>
              <td className="border-b p-2">{expense.note}</td>
              <td className="border-b p-2">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
