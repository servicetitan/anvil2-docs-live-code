import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
import { SelectFieldSync, SelectFieldOption } from "@servicetitan/anvil2";

const options = [
  { id: 1, label: "Option A" },
  { id: 2, label: "Option B" },
  { id: 3, label: "Option C" },
];

function App() {
  const [value, setValue] = useState<SelectFieldOption | null>(null);

  return (
    <Flex direction="row" gap="2" style={{ maxWidth: 500 }}>
      <SelectFieldSync
        label="First option"
        hideLabel
        placeholder="First option"
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
      <SelectFieldSync
        label="Second option"
        hideLabel
        placeholder="Second option"
        options={options}
        value={value}
        onSelectedOptionChange={setValue}
      />
    </Flex>
  );
}

export default App;
