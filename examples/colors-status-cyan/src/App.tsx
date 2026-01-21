import { Flex, Chip } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex gap={2}>
      <Chip label="Confirmed" color={core.primitive.ColorCyan600.value} />
      <Chip label="Scheduled" color={core.primitive.ColorCyan200.value} />
      <Chip label="In progress" color={core.primitive.ColorCyan100.value} />
      <Chip
        label="Upcoming within 7 days"
        color={core.primitive.ColorCyan100.value}
      />
    </Flex>
  );
}

export default App;
