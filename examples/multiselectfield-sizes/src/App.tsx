import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
import {
  MultiSelectFieldSync,
  MultiSelectFieldOption,
} from "@servicetitan/anvil2";

const options: MultiSelectFieldOption[] = [
  { id: 1, label: "The Martian by Andy Weir" },
  { id: 2, label: "Gone Girl by Gillian Flynn" },
  { id: 3, label: "Dune by Frank Herbert" },
  { id: 4, label: "Beloved by Toni Morrison" },
  { id: 5, label: "Atomic Habits by James Clear" },
];

function App() {
  const [smallValue, setSmallValue] = useState<MultiSelectFieldOption[]>([
    options[0],
  ]);
  const [mediumValue, setMediumValue] = useState<MultiSelectFieldOption[]>([
    options[0],
  ]);
  const [largeValue, setLargeValue] = useState<MultiSelectFieldOption[]>([
    options[0],
  ]);

  return (
    <Flex direction="column" gap="6" style={{ maxWidth: 320 }}>
      <MultiSelectFieldSync
        size="small"
        label="Small"
        placeholder="Search books..."
        options={options}
        value={smallValue}
        onSelectedOptionsChange={setSmallValue}
      />
      <MultiSelectFieldSync
        size="medium"
        label="Medium (default)"
        placeholder="Search books..."
        options={options}
        value={mediumValue}
        onSelectedOptionsChange={setMediumValue}
      />
      <MultiSelectFieldSync
        size="large"
        label="Large"
        placeholder="Search books..."
        options={options}
        value={largeValue}
        onSelectedOptionsChange={setLargeValue}
      />
    </Flex>
  );
}

export default App;
