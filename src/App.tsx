import ListGroup from "./components/ListGroup";

function App() {
  let items = ["galle", "kandy", "matara"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
