import { DaysOfTheWeek } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  return (
    <DaysOfTheWeek
      selectedDays={selectedDays}
      onChange={setSelectedDays}
      firstDay={1}
    />
  );
}

export default App;
