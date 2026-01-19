import { DaysOfTheWeek, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [selectedDaysSmall, setSelectedDaysSmall] = useState<number[]>([]);
  const [selectedDaysLarge, setSelectedDaysLarge] = useState<number[]>([]);

  return (
    <Flex direction="column" gap="8">
      <div style={{ width: "328px" }}>
        <DaysOfTheWeek
          selectedDays={selectedDaysSmall}
          onChange={setSelectedDaysSmall}
          label="Smallest size"
          errorAriaLive="assertive"
          moreInfo="More info"
        />
      </div>

      <div style={{ width: "748px" }}>
        <DaysOfTheWeek
          selectedDays={selectedDaysLarge}
          onChange={setSelectedDaysLarge}
          label="Largest size"
          errorAriaLive="assertive"
          moreInfo="More info"
        />
      </div>
    </Flex>
  );
}

export default App;
