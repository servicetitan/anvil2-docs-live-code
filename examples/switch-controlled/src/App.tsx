import { Switch, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Flex gap={4} justifyContent="space-around">
      <Switch
        checked={checked}
        onChange={(_e, { checked }) => {
          setChecked(checked);
        }}
        label="Switch"
        value="switch-example"
      />
      <Button
        onClick={() => {
          setChecked((prev) => !prev);
        }}
      >
        Toggle Switch
      </Button>
    </Flex>
  );
}

export default App;
