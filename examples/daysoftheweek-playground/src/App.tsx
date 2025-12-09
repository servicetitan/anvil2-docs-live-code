import { DaysOfTheWeek } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  return (
    <div style={{ minWidth: "21rem" }}>
      <DaysOfTheWeek
        selectedDays={selectedDays}
        onChange={setSelectedDays}
        label="Label text"
        hint="Hint text"
        description="Description text"
        // errorMessage="Error message"
        errorAriaLive="assertive"
        disabled={false}
        firstDay={7}
        required={false}
        moreInfo="More info"
      />
    </div>
  );
}

export default App;
