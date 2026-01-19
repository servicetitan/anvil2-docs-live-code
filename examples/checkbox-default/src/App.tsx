import { Checkbox, CheckboxGroup } from "@servicetitan/anvil2";

function App() {
  return (
    <CheckboxGroup legend="Group label">
      <Checkbox label="Unselected" />
      <Checkbox label="Selected" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
    </CheckboxGroup>
  );
}

export default App;
