import { Checkbox, CheckboxGroup } from "@servicetitan/anvil2";

function App() {
  return (
    <CheckboxGroup legend="Group label">
      <Checkbox label="Unselected" disabled />
      <Checkbox label="Selected" disabled defaultChecked />
      <Checkbox label="Indeterminate" disabled indeterminate />
    </CheckboxGroup>
  );
}

export default App;
