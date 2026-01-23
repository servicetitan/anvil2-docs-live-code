import { DateFieldYearless } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldYearless
      label="Recurring Date"
      description="Enter month and day only (year not required)"
      required
    />
  );
}

export default App;
