import { Checkbox } from "@servicetitan/anvil2";

function App() {
  return (
    <Checkbox.Group legend="Group label">
      <Checkbox label="Unselected" error />
      <Checkbox label="Selected" error defaultChecked />
      <Checkbox label="Indeterminate" error indeterminate />
    </Checkbox.Group>
  );
}

export default App;
