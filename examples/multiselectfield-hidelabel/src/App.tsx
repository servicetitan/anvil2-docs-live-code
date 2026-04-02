import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
import {
  MultiSelectFieldSync,
  SelectFieldOption,
} from "@servicetitan/anvil2/beta";

const options = [
  { id: 1, label: "Option A" },
  { id: 2, label: "Option B" },
  { id: 3, label: "Option C" },
];

function App() {
  const [values, setValues] = useState<SelectFieldOption[]>([]);

  return (
    <Flex direction="row" gap="2" style={{ maxWidth: 600 }}>
      <MultiSelectFieldSync
        label="First options"
        hideLabel
        placeholder="First options"
        options={options}
        value={values}
        onSelectedOptionsChange={setValues}
      />
      <MultiSelectFieldSync
        label="Second options"
        hideLabel
        placeholder="Second options"
        options={options}
        value={values}
        onSelectedOptionsChange={setValues}
      />
    </Flex>
  );
}

export default App;
