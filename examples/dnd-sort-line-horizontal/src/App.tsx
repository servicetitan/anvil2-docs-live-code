import { Dnd } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ height: "40px", position: "relative" }}>
      <Dnd.SortLine orientation="horizontal" position="before" offset="0" />
    </div>
  );
}

export default App;
