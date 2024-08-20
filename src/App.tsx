import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import Alert from "./components/Alert";
import ButtonRedefined from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import NameList from "./components/NameList";
// import Style from "./components/Style"; /* using of style sheet  */

// import ParentComponent from "./components/ParentComponent";

function App() {
  const handleClick = () => {
    setAlertVisible(true);
  };
  const handleClose = () => {
    setAlertVisible(false);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={handleClose} />}
      <ButtonRedefined color="primary" onClick={handleClick}>
        This is primary button
      </ButtonRedefined>
    </div>
  );
}

export default App;
