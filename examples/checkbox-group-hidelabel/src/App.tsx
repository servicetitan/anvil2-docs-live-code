import { Checkbox } from "@servicetitan/anvil2";

function App() {
  return (
    <Checkbox.Group legend="Notification preferences" hideLabel>
      <Checkbox label="Email" />
      <Checkbox label="SMS" />
      <Checkbox label="Push notifications" />
    </Checkbox.Group>
  );
}

export default App;
