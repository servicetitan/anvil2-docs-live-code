import { DateFieldSingle } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldSingle
      label="Event Date"
      description="Select the date when this event occurs"
      minDate={new Date().toISOString()}
      required
    />
  );
}

export default App;
