import { NumberField } from "@servicetitan/anvil2";

function App() {
  return (
    <NumberField
      label="Decimal numbers"
      defaultValue={3.5}
      minimumFractionDigits={2}
    />
  );
}

export default App;
