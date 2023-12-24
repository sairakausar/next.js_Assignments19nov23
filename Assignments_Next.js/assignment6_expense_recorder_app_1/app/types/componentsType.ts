


//3)
export type ExpensePropType = {
    id: string,
    amount: number,
    category: string,
    note: string,
    date:string,
}
//7
export type ExpenseModelProps = {
    isOpen: boolean,
    onClose: () => void,
    onAddExpense:()=> void,

}