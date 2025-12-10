import { SearchField } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("truck");

  return (
    <SearchField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue("")}
    />
  );
}

export default App;
