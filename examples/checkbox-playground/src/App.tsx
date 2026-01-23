import { Checkbox } from "@servicetitan/anvil2";

function App() {
  return (
    <Checkbox.Group legend="Choose fruit(s)" required onChange={console.log}>
      <Checkbox label="Apple" />
      <Checkbox label="Banana" />
      <Checkbox label="Strawberry" />
    </Checkbox.Group>
  );
}

export default App;
