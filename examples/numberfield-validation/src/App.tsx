import { NumberField } from "@servicetitan/anvil2";

function App() {
  return (
    <NumberField
      defaultValue={123456789}
      maxValue={100}
      description={"Max value: 100"}
    />
  );
}

export default App;
