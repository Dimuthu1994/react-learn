import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("clicked")}>
        primary
      </Button>
    </div>
  );
}

export default App;
