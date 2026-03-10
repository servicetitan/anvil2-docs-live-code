import { DateFieldSingle } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <DateFieldSingle
      label="Appointment Date"
      timezone="Australia/Sydney"
      value={value}
      onChange={(change) => setValue(change.date)}
    />
  );
}

export default App;
