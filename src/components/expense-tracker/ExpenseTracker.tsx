import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import FormExpenseTracker from "./FormExpenseTracker";

interface Expense {
  id: number
  description: string,
  amount: number,
  category: string
}

const ExpenseTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [expenses, setExpenses] = useState(
    [
      {id: 1, description: "uno", amount: 1, category: "cat1"}, 
      {id: 2, description: "dos", amount: 4, category: "Groceries"}, 
      {id: 3, description: "tres", amount: 3, category: "Utilities"}, 
      {id: 4, description: "cuatro", amount: 4, category: "Entertainment"}, 
    ]
  )

  function handleFormSubmit(item: Expense) {
    const newItems = {...expenses, item}
    setExpenses(newItems)
  }

  function handleDelete(id: number) {
    console.log(id)
    setExpenses(
      expenses.filter(expense => expense.id !== id)
    )
  }
  return (
    <>
      <FormExpenseTracker onSubmit={data => setExpenses([...expenses, {...data, id: expenses.length + 1}])  }/>
      <div className="mb-3">
        <ExpenseFilter onSelect={setSelectedCategory}/>
      </div>
      <ExpenseList 
        headers={["Description", "Amount", "Category", ""]}
        expenses={selectedCategory === "All Categories" ? expenses:  expenses.filter(expense => expense.category === selectedCategory)}
        onDelete={handleDelete}
        />
    </>
  )
};

export default ExpenseTracker;
