import { Chip, Flex } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex gap={2}>
      <Chip label="Chip" color={core?.primitive?.ColorPurple200.value} />
      <Chip label="Chip" color={core?.primitive?.ColorRed500.value} />
      <Chip label="Chip" color={core?.primitive?.ColorYellow300.value} />
      <Chip label="Chip" color={core?.primitive?.ColorNeutral500.value} />
    </Flex>
  );
}

export default App;
