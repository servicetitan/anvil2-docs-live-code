import { DateFieldRange } from "@servicetitan/anvil2";
import { useState } from "react";
import type { DateFieldRangeValue } from "@servicetitan/anvil2";

function App() {
  const [value, setValue] = useState<DateFieldRangeValue>(null);

  return (
    <DateFieldRange
      label="Booking Dates"
      timezone="Australia/Sydney"
      value={value}
      onChange={(change) =>
        setValue({ startDate: change.startDate, endDate: change.endDate })
      }
    />
  );
}

export default App;
