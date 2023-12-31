"use client";// 6
import React, { useState } from "react";
import { ExpenseModelProps } from "../types/componentsType";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ExpenseModal = ({ isOpen, onClose, onAddExpense, expenseProp }: ExpenseModelProps) => {
  console.log(expenseProp);
  const [amount, setAmount] = useState<number>(expenseProp.amount);
  const [category, setCategory] = useState<string>(expenseProp.category);
  const [note, setNote] = useState<string>(expenseProp.note);
  const [date, setDate] = useState<string>(expenseProp.date);

  const categories = [
    "Groceries",
    "Rent",
    "Utilities",
    "Entertainment",
    "Online Purchases",
    "Other",
  ]; // Add your own categories

  const handleAddExpense = () => {
    // You can add validation logic here before adding the expense
    const newExpense = {
      id: `${Date.now()}`,
      amount: parseFloat(amount),
      category,
      note,
      date,
    };

    onAddExpense(newExpense);
    setAmount(0);
    setCategory('')
    setNote('')
    setDate('')
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      {/* //10 */}
      <div>Add Expense</div>

      <div className="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
        <div className="modal-container bg-white w-96 mx-auto mt-20 p-6 rounded shadow-lg">
          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold mb-2">Add Expense</h3>
              {/* //11 */}
              <div onClick={onClose}>
                <AiOutlineCloseCircle />
              </div>
            </div>

            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount || expenseProp.amount }
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border p-2 mb-2"
            />

            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="category"
            >
              Category
            </label>

            <select
              id="category"
              value={category || expenseProp.category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border p-2 mb-2"
            >
              {/* <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))} */}
              <option disabled>Select catagori </option>
              {categories.map((category) => { //18 //19
                return <option key={category}>{category}</option>;
              })
              
              }
            </select>

            <label className="block text-gray-600 text-sm mb-2" htmlFor="note">
              Note
            </label>
            <textarea
              id="note"
              value={note || expenseProp.note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border p-2 mb-2"
            />

            <label className="block text-gray-600 text-sm mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date || expenseProp.date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border p-2 mb-4"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleAddExpense}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
