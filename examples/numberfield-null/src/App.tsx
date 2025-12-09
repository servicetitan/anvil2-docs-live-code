import { NumberField, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (value: number | null) => {
    setValue(value);
  };

  return (
    <Flex direction="column" gap="4">
      <NumberField label="Example" value={value} onChange={handleChange} />
      <Button
        onClick={() => {
          setValue(null);
        }}
      >
        Set to null
      </Button>
    </Flex>
  );
}

export default App;
