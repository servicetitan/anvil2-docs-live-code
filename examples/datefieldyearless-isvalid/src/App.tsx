import {
  DateFieldYearless,
  Flex,
  type YearlessDate,
  type DateFieldYearlessChange,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<YearlessDate | null>();
  const [latestEvent, setLatestEvent] = useState<DateFieldYearlessChange>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (change: DateFieldYearlessChange) => {
    setValue(change.value);
    setLatestEvent(change);
    if (change.isValid) setErrorMessage("");
  };

  const handleBlur = () => {
    if (!latestEvent) return;
    if (!latestEvent.isValid) return setErrorMessage("Invalid date");
    if (!latestEvent.isInputValid && !latestEvent.isInputEmpty)
      return setErrorMessage("Valid date, but input isn't fully filled");
  };
  return (
    <Flex direction="column">
      <DateFieldYearless
        label="Yearless validation example"
        description="Will error on New Year's day and leap day"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errorMessage}
        unavailable={{
          dates: [
            { month: 1, day: 1 },
            { month: 2, day: 29 },
          ],
        }}
      />
      <pre>{JSON.stringify(latestEvent, null, 2)}</pre>
    </Flex>
  );
}

export default App;
