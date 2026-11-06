import { Flex } from "@servicetitan/anvil2";
import { Slider } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <Flex direction="column" gap="6" style={{ width: 320 }}>
      <Slider
        label="Technician commission"
        defaultValue={10}
        formatValue={(value) => `${value}%`}
        disabled
      />
      <Slider
        label="Max discount"
        defaultValue={15}
        formatValue={(value) => `${value}%`}
        readOnly
        description="Set by your manager."
      />
      <Slider
        label="Discount"
        defaultValue={30}
        formatValue={(value) => `${value}%`}
        error="Over 25% needs manager approval."
      />
    </Flex>
  );
}

export default App;
