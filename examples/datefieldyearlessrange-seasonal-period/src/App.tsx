import { DateFieldYearlessRange } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldYearlessRange
      label="Recurring Date Range"
      description="Enter month and day range only (year not required)"
      required
    />
  );
}

export default App;
