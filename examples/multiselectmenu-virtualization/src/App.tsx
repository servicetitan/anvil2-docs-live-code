import { useState } from "react";
import {
  Button,
  MultiSelectMenuSync,
  type MultiSelectMenuOption,
} from "@servicetitan/anvil2";

const options: MultiSelectMenuOption[] = Array.from(
  { length: 5000 },
  (_, i) => ({
    id: i,
    label: `Option ${i + 1}`,
  }),
);

function App() {
  const [value, setValue] = useState<MultiSelectMenuOption[]>([]);

  return (
    <div style={{ minWidth: "384px" }}>
      <MultiSelectMenuSync
        virtualize
        selectAll
        label="Large dataset (5000 options)"
        options={options}
        value={value}
        onSelectedOptionsChange={setValue}
        trigger={(props) => (
          <Button {...props}>
            {value.length > 0 ? `${value.length} selected` : "Select options"}
          </Button>
        )}
      />
    </div>
  );
}

export default App;
