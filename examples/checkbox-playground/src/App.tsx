import { Checkbox, CheckboxGroup } from "@servicetitan/anvil2";

function App() {
  return (
    <CheckboxGroup legend="Choose fruit(s)" required onChange={console.log}>
      <Checkbox label="Apple" />
      <Checkbox label="Banana" />
      <Checkbox label="Strawberry" />
    </CheckboxGroup>
  );
}

export default App;
