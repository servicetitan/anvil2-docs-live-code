import { Checkbox } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Rest */}
      <Checkbox label="Notify customer" />

      {/* Selected */}
      <Checkbox label="Notify customer" defaultSelected />

      {/* Indeterminate */}
      <Checkbox label="Notify customer" isIndeterminate />

      {/* Focus */}
      <Checkbox label="Notify customer" />

      {/* Disabled */}
      <Checkbox label="Notify customer" isDisabled />

      {/* Disabled + selected */}
      <Checkbox label="Notify customer" isDisabled defaultSelected />
    </div>
  );
}

export default App;
