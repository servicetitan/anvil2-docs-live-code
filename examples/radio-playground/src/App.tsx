import { Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Radio.Group legend="Choose fruit(s)" required onChange={console.log}>
      <Radio name="fruit" value="Apple" label="Apple" />
      <Radio name="fruit" value="Banana" label="Banana" />
      <Radio name="fruit" value="Strawberry" label="Strawberry" />
    </Radio.Group>
  );
}

export default App;
