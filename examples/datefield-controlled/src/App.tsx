import { DateField } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(new Date().toISOString());

  return (
    <DateField
      value={value}
      onChange={(_event, data) => setValue(data.value)}
    />
  );
}

export default App;
