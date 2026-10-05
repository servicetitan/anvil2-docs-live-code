import { DateFieldRange } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldRange
      label="Reporting period"
      defaultValue={{
        startDate: "1999-12-25",
        endDate: "2000-01-01",
      }}
    />
  );
}

export default App;
