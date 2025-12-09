import { NumberField, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (value: number | null) => {
    setValue(value);
  };

  return (
    <Flex direction="column" gap="4">
      <NumberField
        label="Controlled Example"
        value={value}
        onChange={handleChange}
      />
      <Button
        onClick={() => {
          setValue(11);
        }}
      >
        Set to 11
      </Button>
    </Flex>
  );
}

export default App;
