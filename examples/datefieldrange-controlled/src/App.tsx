import {
  DateFieldRange,
  Flex,
  Button,
  type DateFieldRangeValue,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<DateFieldRangeValue>();

  const today = new Date();
  const plus5days = new Date();
  plus5days.setDate(today.getDate() + 5);
  const valueToSet = {
    startDate: today.toISOString(),
    endDate: plus5days.toISOString(),
  };

  return (
    <Flex gap={4}>
      <DateFieldRange
        value={value}
        onChange={(change) =>
          setValue({ startDate: change.startDate, endDate: change.endDate })
        }
      />
      <Button onClick={() => setValue(valueToSet)}>
        Set to today + 5 days
      </Button>
    </Flex>
  );
}

export default App;
