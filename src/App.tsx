import { useState } from "react";
import ExpenseList from "./expense-tracker/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "www" },
    { id: 2, description: "bbb", amount: 10, category: "www" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((ex) => ex.id !== id))}
      />
    </div>
  );
}

export default App;
