import { TimeField } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [, setTime] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  return (
    <TimeField
      label="Required field"
      required
      error={error}
      onChange={(change) => {
        setTime(change.time);

        if (change.isInputEmpty) {
          setError("Time is required");
        } else {
          setError("");
        }
      }}
    />
  );
}

export default App;
