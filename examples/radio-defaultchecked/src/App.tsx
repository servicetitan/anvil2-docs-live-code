import { Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Radio.Group legend="Notification Frequency">
      <Radio name="ex1" value="daily" label="Daily" />
      <Radio name="ex1" value="weekly" label="Weekly" defaultChecked />
      <Radio name="ex1" value="monthly" label="Monthly" />
    </Radio.Group>
  );
}

export default App;
