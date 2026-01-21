import { Flex, Chip } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex gap={2}>
      <Chip label="To Do 1/5" color={core.primitive.ColorYellow200.value} />
      <Chip label="Paused" color={core.primitive.ColorYellow200.value} />
      <Chip label="Hold" color={core.primitive.ColorOrange200.value} />
      <Chip
        label="Partially Serviced"
        color={core.primitive.ColorYellow200.value}
      />
    </Flex>
  );
}

export default App;
