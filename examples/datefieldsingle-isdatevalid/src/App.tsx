import {
  DateFieldSingle,
  Flex,
  type DateFieldSingleChange,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<string | null | undefined>();
  const [latestEvent, setLatestEvent] = useState<
    DateFieldSingleChange | undefined
  >();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (change: DateFieldSingleChange) => {
    setValue(change.date);
    setLatestEvent(change);
    if (change.isDateValid) setErrorMessage("");
  };

  const handleBlur = () => {
    if (!latestEvent) return;
    if (!latestEvent.isDateValid) return setErrorMessage("Invalid date");
    if (!latestEvent.isInputValid && !latestEvent.isInputEmpty)
      return setErrorMessage("Valid date, but input isn't fully filled");
  };
  return (
    <Flex direction="column">
      <DateFieldSingle
        label="Weekdays Only"
        description="Type a date falling on a weekend to see an error"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errorMessage}
        unavailable={{ daysOfWeek: [6, 7] }}
      />
      <pre>{JSON.stringify(latestEvent, null, 2)}</pre>
    </Flex>
  );
}

export default App;
