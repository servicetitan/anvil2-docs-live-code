import { Checkbox } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* With visible label */}
      <Checkbox label="Notify customer" />

      {/* Indicator only, named via aria-label */}
      <Checkbox aria-label="Notify customer" />
    </div>
  );
}

export default App;
