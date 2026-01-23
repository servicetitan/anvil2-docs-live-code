import { DateFieldRange } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldRange
      label="Reporting Period"
      error="End date must be after start date"
      required
    />
  );
}

export default App;
