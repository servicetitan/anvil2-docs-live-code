import { Calendar, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [date, setDate] = useState<string>();

  return (
    <Flex direction="column" gap="3" alignItems="center">
      <Calendar
        onSelection={(date) => setDate(date.value)}
        defaultTimeZone="America/New_York"
      />
      {date && `Selected Date: ${date}`}
    </Flex>
  );
}

export default App;
