import { Checkbox, CheckboxGroup } from "@servicetitan/anvil2";

function App() {
  return (
    <CheckboxGroup legend="Group label">
      <Checkbox label="Unselected" error />
      <Checkbox label="Selected" error defaultChecked />
      <Checkbox label="Indeterminate" error indeterminate />
    </CheckboxGroup>
  );
}

export default App;
