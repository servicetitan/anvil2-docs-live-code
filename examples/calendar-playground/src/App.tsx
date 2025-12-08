import { Calendar, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [date, setDate] = useState<string | undefined>(undefined);

  return (
    <Flex direction="column" gap="3" alignItems="center">
      <Calendar
        defaultValue={date}
        focusedDate={new Date().toISOString()}
        onSelection={(date) => setDate(date.value)}
      />
      {date && `Selected Date: ${date}`}
    </Flex>
  );
}

export default App;
