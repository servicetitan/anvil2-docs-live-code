import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
import {
  MultiSelectFieldSync,
  MultiSelectFieldOption,
} from "@servicetitan/anvil2/beta";

const options: MultiSelectFieldOption[] = [
  { id: 1, label: "The Martian by Andy Weir" },
  { id: 2, label: "Gone Girl by Gillian Flynn" },
  { id: 3, label: "Dune by Frank Herbert" },
  { id: 4, label: "Beloved by Toni Morrison" },
  { id: 5, label: "Atomic Habits by James Clear" },
];

function App() {
  const [value, setValue] = useState<MultiSelectFieldOption[]>([]);

  return (
    <Flex direction="column" gap="6" style={{ width: 320 }}>
      <MultiSelectFieldSync
        label="Disabled"
        placeholder="Search books..."
        options={options}
        value={[options[0]]}
        onSelectedOptionsChange={setValue}
        disabled
      />
      <MultiSelectFieldSync
        label="Read-only"
        placeholder="Search books..."
        options={options}
        value={[options[0]]}
        onSelectedOptionsChange={setValue}
        readOnly
      />
      <MultiSelectFieldSync
        label="Error"
        placeholder="Search books..."
        options={options}
        value={value}
        onSelectedOptionsChange={setValue}
        error="Please select at least one book"
      />
    </Flex>
  );
}

export default App;
