import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
import { MultiSelectFieldSync, SelectFieldOption } from "@servicetitan/anvil2";

const options = [
  { id: 1, label: "Option A" },
  { id: 2, label: "Option B" },
  { id: 3, label: "Option C" },
];

function App() {
  const [values, setValues] = useState<SelectFieldOption[]>([]);

  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
      <MultiSelectFieldSync
        label="**Bold** label"
        placeholder="Bold"
        options={options}
        value={values}
        onSelectedOptionsChange={setValues}
      />
      <MultiSelectFieldSync
        label="*Italic* label"
        placeholder="Italic"
        options={options}
        value={values}
        onSelectedOptionsChange={setValues}
      />
      <MultiSelectFieldSync
        label="***Bold and italic*** label"
        placeholder="Bold and italic"
        options={options}
        value={values}
        onSelectedOptionsChange={setValues}
      />
      <MultiSelectFieldSync
        label="==Highlight== label"
        placeholder="Highlight"
        options={options}
        value={values}
        onSelectedOptionsChange={setValues}
      />
      <MultiSelectFieldSync
        label="`Code` label"
        placeholder="Code"
        options={options}
        value={values}
        onSelectedOptionsChange={setValues}
      />
    </Flex>
  );
}

export default App;
