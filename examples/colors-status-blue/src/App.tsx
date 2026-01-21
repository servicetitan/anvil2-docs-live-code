import { Flex, Chip } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex gap={2}>
      <Chip label="Recommended" color={core.primitive.ColorBlue600.value} />
      <Chip label="New!" color={core.primitive.ColorBlue400.value} />
      <Chip label="Best" color={core.primitive.ColorBlue500.value} />
      <Chip label="Good" color={core.primitive.ColorBlue300.value} />
      <Chip label="Better" color={core.primitive.ColorBlue200.value} />
    </Flex>
  );
}

export default App;
