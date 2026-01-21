import { Flex, Chip } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex gap={2}>
      <Chip label="Active" color={core.primitive.ColorGreen200.value} />
      <Chip label="Fully Serviced" color={core.primitive.ColorGreen200.value} />
      <Chip label="Received" color={core.primitive.ColorGreen200.value} />
      <Chip label="Completed" color={core.primitive.ColorGreen300.value} />
      <Chip label="Done" color={core.primitive.ColorGreen200.value} />
      <Chip label="Working" color={core.primitive.ColorGreen200.value} />
    </Flex>
  );
}

export default App;
