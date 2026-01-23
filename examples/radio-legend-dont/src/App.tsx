import { Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Radio.Group legend="Select vehicles to monitor">
      <Radio
        name="c1"
        value="a"
        label="Apply to individual vehicles"
        defaultChecked
      />
      <Radio name="c1" value="b" label="Apply to vehicle groups" />
    </Radio.Group>
  );
}

export default App;
