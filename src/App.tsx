// import { useState } from "react";
import { useState } from "react";
import "./App.css";
// import Alert from "./components/Alert";
// import Alert from "./components/Alert";
// import ButtonRedefined from "./components/Button";
// import Like from "./components/Like/Like";
// import UpdatingObjects from "./components/UpdatingObjects";
// import UpdatingObjectsImmer from "./components/UpdatingObjects-Immer";
import NavBar from "./components/NavBar";
import ShoppingCart from "./components/ShoppingCart";
// import ListGroup from "./components/ListGroup";
// import NameList from "./components/NameList";
// import Style from "./components/Style"; /* using of style sheet  */

// import ParentComponent from "./components/ParentComponent";

function App() {
  const [cartItems, setCartItems] = useState([
    "Hair Trimmer",
    "Digital Eraser",
  ]);
  const handleClear = () => {
    setCartItems([]);
  };
  return (
    <div>
      <NavBar itemsCount={cartItems.length} />
      <ShoppingCart cartItems={cartItems} onClear={handleClear} />
    </div>
  );
}

export default App;
