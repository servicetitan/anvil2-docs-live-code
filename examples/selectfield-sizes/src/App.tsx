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
  const [smallValue, setSmallValue] = useState<SelectFieldOption | null>(null);
  const [mediumValue, setMediumValue] = useState<SelectFieldOption | null>(
    null,
  );
  const [largeValue, setLargeValue] = useState<SelectFieldOption | null>(null);

  return (
    <Flex direction="column" gap="6" style={{ maxWidth: 320 }}>
      <SelectFieldSync
        size="small"
        label="Small"
        placeholder="Search books..."
        options={options}
        value={smallValue}
        onSelectedOptionChange={setSmallValue}
      />
      <SelectFieldSync
        size="medium"
        label="Medium (default)"
        placeholder="Search books..."
        options={options}
        value={mediumValue}
        onSelectedOptionChange={setMediumValue}
      />
      <SelectFieldSync
        size="large"
        label="Large"
        placeholder="Search books..."
        options={options}
        value={largeValue}
        onSelectedOptionChange={setLargeValue}
      />
    </Flex>
  );
}

export default App;
