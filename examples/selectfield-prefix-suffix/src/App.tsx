import { useState } from "react";
import { SelectFieldSync, SelectFieldOption } from "@servicetitan/anvil2";

const options: SelectFieldOption[] = [
  { id: 1, label: "0-25" },
  { id: 2, label: "25-50" },
  { id: 3, label: "50-100" },
  { id: 4, label: "100+" },
];

function App() {
  const [value, setValue] = useState<SelectFieldOption | null>(null);

  return (
    <div style={{ width: 320 }}>
      <SelectFieldSync
        label="Price range"
        placeholder="Select price range..."
        options={options}
        prefix="$"
        suffix="USD"
        value={value}
        onSelectedOptionChange={setValue}
      />
    </div>
  );
}

export default App;
