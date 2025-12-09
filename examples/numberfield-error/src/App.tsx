import { NumberField } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<number | null>(0);

  return (
    <NumberField
      label="Quantity"
      description="Type an even number"
      value={value}
      onChange={setValue}
      error={(value ?? 0) % 2 !== 0 ? "Must be an even amount" : ""}
    />
  );
}

export default App;
