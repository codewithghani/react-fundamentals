import "./App.css";
import ListGroup from "./components/ListGroup";
// import NameList from "./components/NameList";
// import Style from "./components/Style"; /* using of style sheet  */

// import ParentComponent from "./components/ParentComponent";

function App() {
  const Cities = ["Lahore", "Karachi", "Islamabad", "Mailsi"];
  const Countries = ["Pak", "UK", "USA", "China"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={Cities}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      <ListGroup
        items={Countries}
        heading="Countries"
        onSelectItem={handleSelectedItem}
      />

      {/* <Style type={true} /> */}
    </div>
  );
}

export default App;
