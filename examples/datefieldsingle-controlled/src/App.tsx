import { DateFieldSingle, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<string | null>();

  return (
    <Flex gap={4}>
      <DateFieldSingle
        value={value}
        onChange={(change) => setValue(change.date)}
      />
      <Button
        onClick={() => {
          setValue(new Date().toISOString());
        }}
      >
        Set to today
      </Button>
    </Flex>
  );
}

export default App;
