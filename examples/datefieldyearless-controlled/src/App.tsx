import {
  DateFieldYearless,
  Button,
  type YearlessDate,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<YearlessDate | null | undefined>();

  return (
    <>
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
    </>
  );
}

export default App;
