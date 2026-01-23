import { Checkbox } from "@servicetitan/anvil2";

function App() {
  return (
    <Checkbox.Group legend="Group label">
      <Checkbox label="Unselected" />
      <Checkbox label="Selected" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
    </Checkbox.Group>
  );
}

export default App;
