import { Checkbox } from "@servicetitan/anvil2";

function App() {
  return (
    <Checkbox.Group legend="Group label">
      <Checkbox label="Unselected" disabled />
      <Checkbox label="Selected" disabled defaultChecked />
      <Checkbox label="Indeterminate" disabled indeterminate />
    </Checkbox.Group>
  );
}

export default App;
