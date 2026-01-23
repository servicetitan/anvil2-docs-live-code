import { DateFieldYearlessRange } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldYearlessRange
      label="Seasonal Period"
      disablePicker
      description="Calendar picker is disabled, manual entry only"
    />
  );
}

export default App;
