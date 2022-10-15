import "./App.css";
import { store, useStore } from "./store";

function DisplayCounter({ field }: { field: "count1" | "count2" }) {
  const counter = useStore((store) => store[field]);
  return <div>{counter}</div>;
}

function HandleCounter({ field }: { field: "count1" | "count2" }) {
  const counter = useStore((store) => store[field]);
  return (
    <button
      onClick={() => {
        const count = counter + 1;
        store.setState({ ...store.getState(), [field]: count });
      }}
    >
      +{field}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <DisplayCounter field="count1" />
      <HandleCounter field="count1" />
      <br />
      <DisplayCounter field="count2" />
      <HandleCounter field="count2" />
    </div>
  );
}

export default App;
