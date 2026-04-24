import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
import {
  MultiSelectFieldSync,
  MultiSelectFieldOption,
} from "@servicetitan/anvil2/beta";

const options: MultiSelectFieldOption[] = [
  { id: 1, label: "The Martian" },
  { id: 2, label: "Gone Girl" },
  { id: 3, label: "Mistborn" },
  { id: 4, label: "Orient Express" },
  { id: 5, label: "Dune" },
  { id: 6, label: "Beloved" },
  { id: 7, label: "Atomic Habits" },
  { id: 8, label: "Sapiens" },
];

function App() {
  const [singleRowValue, setSingleRowValue] =
    useState<MultiSelectFieldOption[]>(options);
  const [max3Value, setMax3Value] = useState<MultiSelectFieldOption[]>(options);
  const [max5Value, setMax5Value] = useState<MultiSelectFieldOption[]>(options);

  return (
    <Flex direction="column" gap="6" style={{ maxWidth: 400 }}>
      <MultiSelectFieldSync
        label="Single row"
        placeholder="Search books..."
        options={options}
        value={singleRowValue}
        onSelectedOptionsChange={setSingleRowValue}
        singleRow
      />
      <MultiSelectFieldSync
        label="Max 3 chips"
        placeholder="Search books..."
        options={options}
        value={max3Value}
        onSelectedOptionsChange={setMax3Value}
        maxChips={3}
      />
      <MultiSelectFieldSync
        label="Max 5 chips"
        placeholder="Search books..."
        options={options}
        value={max5Value}
        onSelectedOptionsChange={setMax5Value}
        maxChips={5}
      />
    </Flex>
  );
}

export default App;
