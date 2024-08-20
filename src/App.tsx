import "./App.css";
import ListGroup from "./components/ListGroup";
// import NameList from "./components/NameList";
// import Style from "./components/Style"; /* using of style sheet  */

// import ParentComponent from "./components/ParentComponent";

function App() {
  const Cities = ["Lahore", "Karachi", "Islamabad", "Mailsi"];
  const Countries = ["Pak", "UK", "USA", "China"];
  return (
    <div>
      <ListGroup items={Cities} heading="Cities" />
      <ListGroup items={Countries} heading="Countries" />

      {/* <Style type={true} /> */}
    </div>
  );
}

export default App;
