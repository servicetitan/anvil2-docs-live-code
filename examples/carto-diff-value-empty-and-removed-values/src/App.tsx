import { DiffValue, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <Text variant="eyebrow" text="Empty to value" />
        <DiffValue to="8.0h" />
      </div>
      <div>
        <Text variant="eyebrow" text="Value to removed" />
        <DiffValue from="6.5h" />
      </div>
    </div>
  );
}

export default App;
