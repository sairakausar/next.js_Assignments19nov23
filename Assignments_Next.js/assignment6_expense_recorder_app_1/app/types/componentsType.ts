


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
    onAddExpense: () => void,
    expenseProp: expenseType,

}//13
export type onChangeEventType = {
    target: (Value :string, name:string)
}
//14
export type expenseType = {
    note: string,
    date: string,
    amount: number,
    category: string,
    id: string,
}