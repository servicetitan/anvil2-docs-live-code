import { DaysOfTheWeek, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [selectedDaysUnchecked, setSelectedDaysUnchecked] = useState<number[]>(
    [],
  );
  const [selectedDaysChecked, setSelectedDaysChecked] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);
  const [selectedDaysDisabled, setSelectedDaysDisabled] = useState<number[]>(
    [],
  );

  return (
    <Flex direction="column" gap="8" style={{ minWidth: "20.5rem" }}>
      <DaysOfTheWeek
        selectedDays={selectedDaysUnchecked}
        onChange={setSelectedDaysUnchecked}
        label="All days unchecked"
        errorAriaLive="assertive"
        disabled={false}
        firstDay={7}
      />

      <DaysOfTheWeek
        selectedDays={selectedDaysChecked}
        onChange={setSelectedDaysChecked}
        label="All days checked"
        errorAriaLive="assertive"
        disabled={false}
        firstDay={7}
      />

      <DaysOfTheWeek
        selectedDays={selectedDaysDisabled}
        onChange={setSelectedDaysDisabled}
        label="All days disabled"
        errorAriaLive="assertive"
        disabled={true}
        firstDay={7}
      />
    </Flex>
  );
}

export default App;
