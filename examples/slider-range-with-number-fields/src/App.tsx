import { Flex, NumberField, Text } from "@servicetitan/anvil2";
import { Slider, type SliderRangeValue } from "@servicetitan/anvil2/beta";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<SliderRangeValue>([18, 28]);
  const [start, end] = value;

  return (
    <Flex direction="column" gap="2" style={{ width: 320 }}>
      <Slider
        label="Pay range"
        range
        showValue={false}
        min={15}
        max={60}
        value={value}
        onChange={setValue}
        formatValue={(next) => `$${next}`}
      />
      <Flex alignItems="center" gap="2">
        <NumberField
          hideControls
          label="Minimum pay"
          hideLabel
          prefix="$"
          minValue={15}
          maxValue={60}
          value={start}
          onChange={(next) =>
            setValue([Math.min(Math.max(next ?? 15, 15), end), end])
          }
          style={{ flex: 1, minWidth: 0 }}
        />
        <Text aria-hidden subdued>
          –
        </Text>
        <NumberField
          hideControls
          label="Maximum pay"
          hideLabel
          prefix="$"
          minValue={15}
          maxValue={60}
          value={end}
          onChange={(next) =>
            setValue([start, Math.min(Math.max(next ?? 60, start), 60)])
          }
          style={{ flex: 1, minWidth: 0 }}
        />
      </Flex>
    </Flex>
  );
}

export default App;
