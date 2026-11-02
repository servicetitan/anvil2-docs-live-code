import { useState } from "react";
import { SelectFieldSync, type SelectFieldOption } from "@servicetitan/anvil2";

// Generate a large dataset to demonstrate virtualization
const options: SelectFieldOption[] = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  label: `Option ${i + 1}`,
}));

function App() {
  const [value, setValue] = useState<SelectFieldOption | null>(null);

  return (
    <div style={{ width: 384 }}>
      <SelectFieldSync
        virtualize
        label="Large dataset (5000 options)"
        placeholder="Search options..."
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
    </div>
  );
}

export default App;
