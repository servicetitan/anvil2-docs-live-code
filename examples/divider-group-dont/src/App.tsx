import { Divider, Checkbox, CheckboxGroup } from "@servicetitan/anvil2";

function App() {
  return (
    <CheckboxGroup legend="What support do you need?">
      <Divider />
      <Checkbox name="support" value="software" label="Software" />
      <Divider />
      <Checkbox name="support" value="hardware" label="Hardware" />
      <Divider />
      <Checkbox name="support" value="report" label="Expense Report" />
      <Divider />
    </CheckboxGroup>
  );
}

export default App;
