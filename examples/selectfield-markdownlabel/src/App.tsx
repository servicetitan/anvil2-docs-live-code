import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
import { SelectFieldSync, SelectFieldOption } from "@servicetitan/anvil2/beta";

const options = [
  { id: 1, label: "Option A" },
  { id: 2, label: "Option B" },
  { id: 3, label: "Option C" },
];

function App() {
  const [value, setValue] = useState<SelectFieldOption | null>(null);

  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
      <SelectFieldSync
        label="**Bold** label"
        placeholder="Bold"
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
      <SelectFieldSync
        label="*Italic* label"
        placeholder="Italic"
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
      <SelectFieldSync
        label="***Bold and italic*** label"
        placeholder="Bold and italic"
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
      <SelectFieldSync
        label="==Highlight== label"
        placeholder="Highlight"
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
      <SelectFieldSync
        label="`Code` label"
        placeholder="Code"
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
    </Flex>
  );
}

export default App;
