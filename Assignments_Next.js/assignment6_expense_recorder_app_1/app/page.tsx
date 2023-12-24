import Image from 'next/image'
import  ExpenseList  from "./expenseList/expenseList";
//4)
export default function Home() {
  return (
    <main>
    {/* //6 */}
      <ExpenseList expenses={[{ id: "5", amount: 12345, note: "this is note", category: "male, female", date:"24-12-2023"}]} />
    </main>
  );
}
