import { DateFieldYearlessRange } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldYearlessRange
      label="Date Range"
      error="End date must be after start date"
      required
    />
  );
}

export default App;
