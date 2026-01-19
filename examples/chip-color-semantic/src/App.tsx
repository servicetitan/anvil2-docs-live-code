import { Chip, Flex } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex gap={2}>
      <Chip
        label="Inspected"
        color={core.semantic?.StatusColorSuccess?.value}
      />
      <Chip label="Complete" color={core.semantic?.StatusColorWarning?.value} />
      <Chip label="Shipped" color={core.semantic?.StatusColorDanger?.value} />
    </Flex>
  );
}

export default App;
