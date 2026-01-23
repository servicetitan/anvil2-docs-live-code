import { Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Radio.Group legend="Notification Frequency">
      <Radio name="ex2" value="daily" label="Daily" disabled />
      <Radio name="ex2" value="weekly" label="Weekly" disabled defaultChecked />
      <Radio name="ex2" value="monthly" label="Monthly" disabled />
    </Radio.Group>
  );
}

export default App;
