import { useState } from "react";
import {
  MultiSelectFieldSync,
  type MultiSelectFieldOption,
} from "@servicetitan/anvil2";

// Generate a large dataset to demonstrate virtualization
const options: MultiSelectFieldOption[] = Array.from(
  { length: 5000 },
  (_, i) => ({
    id: i,
    label: `Option ${i + 1}`,
  }),
);

function App() {
  const [value, setValue] = useState<MultiSelectFieldOption[]>([]);

  return (
    <div style={{ width: 384 }}>
      <MultiSelectFieldSync
        selectAll
        virtualize
        label="Large dataset (5000 options)"
        placeholder="Search options..."
        options={options}
        value={value}
        onSelectedOptionsChange={setValue}
      />
    </div>
  );
}

export default App;
