import { useState } from "react";
import {
  MultiSelectFieldSync,
  MultiSelectFieldOption,
} from "@servicetitan/anvil2";

const options: MultiSelectFieldOption[] = [
  { id: 1, label: "bug" },
  { id: 2, label: "feature" },
  { id: 3, label: "enhancement" },
  { id: 4, label: "documentation" },
  { id: 5, label: "help wanted" },
];

function App() {
  const [value, setValue] = useState<MultiSelectFieldOption[]>([]);

  return (
    <div style={{ width: 320 }}>
      <MultiSelectFieldSync
        label="Tags"
        placeholder="Select tags..."
        options={options}
        prefix="#"
        value={value}
        onSelectedOptionsChange={setValue}
      />
    </div>
  );
}

export default App;
