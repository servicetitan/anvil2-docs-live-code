import { Calendar, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [date, setDate] = useState<string | undefined>(
    new Date().toISOString(),
  );

  return (
    <Flex direction="column" gap={1} alignItems="center">
      <Calendar value={date} onSelection={({ value }) => setDate(value)} />
      <Button onClick={() => setDate("2000-01-01")} size="small">
        Go to millenium
      </Button>
    </Flex>
  );
}

export default App;
