import { Flex } from "@servicetitan/anvil2";
import { Slider } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <Flex direction="column" gap="6" style={{ width: 320 }}>
      {[25, 10].map((step) => (
        <Slider
          key={step}
          label="Progress"
          defaultValue={50}
          step={step}
          formatValue={(value) => `${value}%`}
          marks
          description={`Increments every ${step}%`}
        />
      ))}
    </Flex>
  );
}

export default App;
