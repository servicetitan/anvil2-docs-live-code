import {
  DateFieldYearless,
  Flex,
  Button,
  type YearlessDate,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<YearlessDate | null>();

  return (
    <Flex gap={4}>
      <DateFieldYearless
        value={value}
        onChange={(change) => setValue(change.value)}
      />
      <Button
        onClick={() => {
          setValue({ day: 1, month: 1 });
        }}
      >
        Set to New Year&apos;s Day
      </Button>
    </Flex>
  );
}

export default App;
