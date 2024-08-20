import "./App.css";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
// import NameList from "./components/NameList";
// import Style from "./components/Style"; /* using of style sheet  */

// import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
