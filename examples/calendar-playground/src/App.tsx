import { Calendar, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [date, setDate] = useState<string>();

  return (
    <Flex direction="column" gap="3" alignItems="center">
      <Calendar
        defaultValue={date}
        onSelection={(date) => setDate(date.value)}
      />
      {date && `Selected Date: ${date}`}
    </Flex>
  );
}

export default App;
