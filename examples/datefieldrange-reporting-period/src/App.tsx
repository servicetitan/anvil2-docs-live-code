import { DateFieldRange } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldRange
      label="Date Range"
      description="Select the start and end dates for this period"
      required
    />
  );
}

export default App;
