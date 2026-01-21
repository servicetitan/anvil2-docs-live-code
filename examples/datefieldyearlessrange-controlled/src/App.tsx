import {
  DateFieldYearlessRange,
  type DateFieldYearlessRangeChange,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [dateRange, setDateRange] = useState<DateFieldYearlessRangeChange>({
    startDate: { month: 1, day: 1 },
    endDate: { month: 12, day: 31 },
  });

  return (
    <DateFieldYearlessRange
      label="Annual Period"
      value={dateRange}
      onChange={setDateRange}
    />
  );
}

export default App;
