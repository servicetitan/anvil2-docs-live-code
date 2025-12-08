import { DateField } from "@servicetitan/anvil2";

function App() {
  return (
    <DateField
      range
      defaultValue={{
        start: new Date(2025, 4, 5).toISOString(),
        end: new Date(2025, 4, 12).toISOString(),
      }}
    />
  );
}

export default App;
