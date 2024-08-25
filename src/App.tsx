// import { useState } from "react";
// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseTracker/components/ExpenseList";
// import ExpandableText from "./components/ExpandableText";
// import Form from "./components/Form";
// import Alert from "./components/Alert";
// import Alert from "./components/Alert";
// import ButtonRedefined from "./components/Button";
// import Like from "./components/Like/Like";
// import UpdatingObjects from "./components/UpdatingObjects";
// import UpdatingObjectsImmer from "./components/UpdatingObjects-Immer";
// import NavBar from "./components/NavBar";
// import ShoppingCart from "./components/ShoppingCart";
// import UpdatingStateEx from "./components/UpdatingStateEx";
// import ListGroup from "./components/ListGroup";
// import NameList from "./components/NameList";
// import Style from "./components/Style"; /* using of style sheet  */

// import ParentComponent from "./components/ParentComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseFilter from "./components/ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/components/ExpenseForm";
// import categories from "./components/ExpenseTracker/categories";
function App() {
  const [expenses, setExpense] = useState([
    {
      id: 1,
      description: "spent on family",
      expense: 50,
      category: "utilities",
    },
    {
      id: 2,
      description: "spent on friends",
      expense: 10,
      category: "shopping",
    },
    {
      id: 3,
      description: "spent on Gfs",
      expense: 500,
      category: "entertainment",
    },
    {
      id: 4,
      description: "spent on Gfs",
      expense: 500,
      category: "shopping",
    },
    {
      id: 5,
      description: "spent on Gfs",
      expense: 500,
      category: "grocery",
    },
  ]);
  const [selectedCat, setSelectedCat] = useState("");
  const handleDelete = (id: number) => {
    setExpense(expenses.filter((expense) => expense.id !== id));
  };
  const handleSelected = (cat: string) => {
    setSelectedCat(cat);
  };
  const visibleExpense =
    selectedCat && selectedCat !== "all"
      ? expenses.filter((expense) => expense.category === selectedCat)
      : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpense([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 1,
            },
          ])
        }
      />
      <ExpenseFilter onSelected={handleSelected} />
      <ExpenseList expenses={visibleExpense} onDelete={handleDelete} />
    </div>
  );
}

export default App;
