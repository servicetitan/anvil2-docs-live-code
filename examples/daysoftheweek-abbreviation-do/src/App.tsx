import { DaysOfTheWeek, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  return (
    <Flex style={{ minHeight: "97px", width: "328px" }} alignItems="center">
      <DaysOfTheWeek
        selectedDays={selectedDays}
        onChange={setSelectedDays}
        errorAriaLive="assertive"
      />
    </Flex>
  );
}

export default App;
