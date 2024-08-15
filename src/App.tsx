import "./App.css";
// import Message from "./components/Message";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup category="Cities">
        {" "}
        <h2>My Favourite Cities</h2>
      </ListGroup>
    </div>
  );
}

export default App;
