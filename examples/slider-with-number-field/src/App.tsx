import { Flex, NumberField } from "@servicetitan/anvil2";
import { Slider } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(15);

  return (
    <Flex alignItems="flex-end" gap="4" style={{ width: 320 }}>
      <Slider
        label="Discount"
        showValue={false}
        value={value}
        onChange={setValue}
        formatValue={(next) => `${next}%`}
        style={{ flex: 1 }}
      />
      <NumberField
        hideControls
        label="Discount"
        hideLabel
        suffix="%"
        maxValue={100}
        value={value}
        onChange={(next) => setValue(Math.min(Math.max(next ?? 0, 0), 100))}
        style={{ width: 88 }}
      />
    </Flex>
  );
}

export default App;
