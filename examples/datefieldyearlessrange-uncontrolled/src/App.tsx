import { DateFieldYearlessRange } from "@servicetitan/anvil2";

function App() {
  return (
    <DateFieldYearlessRange
      label="Season"
      defaultValue={{
        startDate: { month: 6, day: 1 },
        endDate: { month: 8, day: 31 },
      }}
    />
  );
}

export default App;
