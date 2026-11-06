import { Button, Flex } from "@servicetitan/anvil2";
import { Slider } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(20);

  return (
    <Flex direction="column" gap="4" style={{ width: 320 }}>
      <Slider
        label="Volume"
        value={value}
        onChange={setValue}
        onChangeEnd={(next) => console.log("Saved", next)}
      />
      <Flex gap="2">
        <Button onClick={() => setValue(0)}>Mute</Button>
        <Button onClick={() => setValue(100)}>Max</Button>
      </Flex>
    </Flex>
  );
}

export default App;
