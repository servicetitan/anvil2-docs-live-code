import { useState } from "react";
import {
  Button,
  SelectMenuSync,
  type SelectMenuOption,
} from "@servicetitan/anvil2";

const options: SelectMenuOption[] = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  label: `Option ${i + 1}`,
}));

function App() {
  const [value, setValue] = useState<SelectMenuOption | null>(null);

  return (
    <div style={{ minWidth: "384px" }}>
      <SelectMenuSync
        virtualize
        label="Large dataset (5000 options)"
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
        trigger={(props) => (
          <Button {...props}>{value ? value.label : "Select an option"}</Button>
        )}
      />
    </div>
  );
}

export default App;
