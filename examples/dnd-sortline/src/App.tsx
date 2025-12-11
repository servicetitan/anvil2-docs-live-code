import { Dnd } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Dnd.SortLine orientation="vertical" position="before" offset="-0.5rem" />
    </div>
  );
}

export default App;
