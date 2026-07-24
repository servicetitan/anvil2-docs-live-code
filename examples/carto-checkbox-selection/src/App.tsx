import { Checkbox } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox label="Unselected" />
      <Checkbox label="Selected" defaultSelected />
    </div>
  );
}

export default App;
