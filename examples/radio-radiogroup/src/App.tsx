import { Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Radio.Group legend="Choose a taco" required>
      <Radio name="taco" value="asada" label="Carne Asada" />
      <Radio name="taco" value="pollo" label="Pollo" />
    </Radio.Group>
  );
}

export default App;
