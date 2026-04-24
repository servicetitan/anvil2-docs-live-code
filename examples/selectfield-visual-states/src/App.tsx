import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
import { SelectFieldSync, SelectFieldOption } from "@servicetitan/anvil2/beta";

const options: SelectFieldOption[] = [
  { id: 1, label: "The Martian by Andy Weir" },
  { id: 2, label: "Gone Girl by Gillian Flynn" },
  { id: 3, label: "Dune by Frank Herbert" },
  { id: 4, label: "Beloved by Toni Morrison" },
  { id: 5, label: "Atomic Habits by James Clear" },
];

function App() {
  const [value, setValue] = useState<SelectFieldOption | null>(null);

  return (
    <Flex direction="column" gap="6" style={{ width: 320 }}>
      <SelectFieldSync
        label="Disabled"
        placeholder="Search books..."
        options={options}
        value={options[0]}
        onSelectedOptionChange={setValue}
        disabled
      />
      <SelectFieldSync
        label="Read-only"
        placeholder="Search books..."
        options={options}
        value={options[0]}
        onSelectedOptionChange={setValue}
        readOnly
      />
      <SelectFieldSync
        label="Error"
        placeholder="Search books..."
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
        error="Please select a book"
      />
    </Flex>
  );
}

export default App;
