// import { useState } from "react";
import "./App.css";
// import Alert from "./components/Alert";
// import Alert from "./components/Alert";
// import ButtonRedefined from "./components/Button";
import Like from "./components/Like/Like";
// import ListGroup from "./components/ListGroup";
// import NameList from "./components/NameList";
// import Style from "./components/Style"; /* using of style sheet  */

// import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div>
      <Like
        size={40}
        onClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}

export default App;
