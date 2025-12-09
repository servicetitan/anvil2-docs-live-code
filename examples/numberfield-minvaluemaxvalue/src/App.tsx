import { NumberField } from "@servicetitan/anvil2";

function App() {
  return (
    <NumberField
      label="Step by 3"
      defaultValue={13}
      step={3}
      minValue={11}
      maxValue={22}
      description="Min 11, max 22"
    />
  );
}

export default App;
