import { DateFieldRange, type DateFieldRangeValue } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<DateFieldRangeValue>({
    startDate: "2025-12-31",
    endDate: "2025-01-01",
  });
  const [error, setError] = useState<string | undefined>(
    "Enter an end date on or after the start date, inside the allowed range.",
  );

  return (
    <DateFieldRange
      label="Reporting period"
      minDate="2025-01-01"
      maxDate="2025-12-31"
      value={value}
      error={error}
      onChange={(change) => {
        setValue({ startDate: change.startDate, endDate: change.endDate });

        // Partial entry is not a finished range. Wait until both ends parse.
        if (!change.isInputValid) {
          setError(undefined);
          return;
        }

        setError(
          change.isDateRangeValid
            ? undefined
            : "Enter an end date on or after the start date, inside the allowed range.",
        );
      }}
    />
  );
}

export default App;
