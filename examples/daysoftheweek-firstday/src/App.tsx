import { DaysOfTheWeek } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  return (
    <div style={{ minWidth: "20.5rem" }}>
      <DaysOfTheWeek
        selectedDays={selectedDays}
        onChange={setSelectedDays}
        firstDay={1}
      />
    </div>
  );
}

export default App;
