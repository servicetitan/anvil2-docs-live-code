import { DateFieldSingle, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<string | null>();

  return (
    <>
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
    </>
  );
}

export default App;
