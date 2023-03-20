import { useState } from "react";
import ExpenseTracker from "./components/expenseTracker/ExpenseTracker";
import Table from "./components/Table";

function App() {
  return (
    <>
      <ExpenseTracker />
      <Table />
    </>
  );
}

export default App;
