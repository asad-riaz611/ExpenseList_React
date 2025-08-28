import ExpenseList from "./expense-list/components/ExpenseList";
import ExpenseFilter from "./expense-list/components/ExpenseFilter";
import ExpenseForm from "./expense-list/components/ExpenseForm";
import { useState } from "react";

const App = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, description: "Apple", amount: 21, category: "Groceries" },
    { id: 2, description: "Apple", amount: 22, category: "Groceries" },
    { id: 3, description: "Apple", amount: 23, category: "Utilities" },
    { id: 4, description: "Apple", amount: 24, category: "Utilities" },
    { id: 5, description: "Apple", amount: 25, category: "Entertainment" },
  ]);
  const visibleExpenses = selectCategory
    ? expenses.filter((expense) => expense.category === selectCategory)
    : expenses;
  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(e) =>
            setExpense([...expenses, { ...e, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelect={(category) => setSelectCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        onDelete={(id) =>
          setExpense((expense) => expense.filter((e) => e.id !== id))
        }
        expenses={visibleExpenses}
      />
    </>
  );
};

export default App;
