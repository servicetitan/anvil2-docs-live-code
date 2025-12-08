import { DateFieldRange } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldRange
      defaultValue={{
        startDate: "1999-12-25",
        endDate: new Date().toISOString(),
      }}
    />
  );
}

export default App;
