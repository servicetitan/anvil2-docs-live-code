import { DateFieldYearless } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldYearless
      label="Birthday"
      disablePicker
      description="Calendar picker is disabled, manual entry only"
    />
  );
}

export default App;
