import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
  ]);
  const [selectedCat, setSelectedCat] = useState("");

  const visibleExpenses = selectedCat
    ? expenses.filter((e) => e.category === selectedCat)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(cat) => setSelectedCat(cat)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((ex) => ex.id !== id))}
      />
    </div>
  );
}

export default App;
