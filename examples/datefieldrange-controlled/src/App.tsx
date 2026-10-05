import {
  DateFieldRange,
  Flex,
  Button,
  type DateFieldRangeValue,
} from "@servicetitan/anvil2";
import { useState } from "react";

function toDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function App() {
  const [value, setValue] = useState<DateFieldRangeValue>(null);

  const today = new Date();
  const plus5days = new Date();
  plus5days.setDate(today.getDate() + 5);

  return (
    <Flex gap={4}>
      <DateFieldRange
        label="Reporting period"
        value={value}
        onChange={(change) =>
          setValue({ startDate: change.startDate, endDate: change.endDate })
        }
      />
      <Button
        onClick={() =>
          setValue({
            startDate: toDateString(today),
            endDate: toDateString(plus5days),
          })
        }
      >
        Set to today + 5 days
      </Button>
    </Flex>
  );
}

export default App;
