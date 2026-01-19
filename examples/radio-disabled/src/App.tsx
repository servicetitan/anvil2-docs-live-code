import { Radio, RadioGroup } from "@servicetitan/anvil2";

function App() {
  return (
    <RadioGroup legend="Notification Frequency">
      <Radio name="ex2" value="daily" label="Daily" disabled />
      <Radio name="ex2" value="weekly" label="Weekly" disabled defaultChecked />
      <Radio name="ex2" value="monthly" label="Monthly" disabled />
    </RadioGroup>
  );
}

export default App;
