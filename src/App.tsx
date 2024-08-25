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

function App() {
  const [expenses, setExpense] = useState([
    {
      id: 1,
      description: "spent on family",
      expense: 50,
    },
    {
      id: 2,
      description: "spent on friends",
      expense: 70,
    },
    {
      id: 3,
      description: "spent on Gfs",
      expense: 500,
    },
  ]);
  const handleDelete = (id: number) => {
    setExpense(expenses.filter((expense) => expense.id !== id));
  };
  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
