import "./App.css";
// import Alert from "./components/Alert";
import ButtonRedefined from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import NameList from "./components/NameList";
// import Style from "./components/Style"; /* using of style sheet  */

// import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div>
      <ButtonRedefined color="primary" onClick={() => console.log("clicked")}>
        This is primary button
      </ButtonRedefined>
      <ButtonRedefined color="secondary" onClick={() => console.log("clicked")}>
        This is secondary button
      </ButtonRedefined>
      <ButtonRedefined color="success" onClick={() => console.log("clicked")}>
        This is success button
      </ButtonRedefined>
      <ButtonRedefined color="danger" onClick={() => console.log("clicked")}>
        This is danger button
      </ButtonRedefined>
      <ButtonRedefined color="warning" onClick={() => console.log("clicked")}>
        This is warning button
      </ButtonRedefined>
      <ButtonRedefined color="info" onClick={() => console.log("clicked")}>
        This is info button
      </ButtonRedefined>
      <ButtonRedefined color="light" onClick={() => console.log("clicked")}>
        This is light button
      </ButtonRedefined>
      <ButtonRedefined color="dark" onClick={() => console.log("clicked")}>
        This is dark button
      </ButtonRedefined>
      <ButtonRedefined color="link" onClick={() => console.log("clicked")}>
        This is link button
      </ButtonRedefined>
    </div>
  );
}

export default App;
