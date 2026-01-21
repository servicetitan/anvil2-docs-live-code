import { Flex, Chip } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex gap={2}>
      <Chip label="Error" color={core.primitive.ColorRed500.value} />
      <Chip label="Rejected" color={core.primitive.ColorRed400.value} />
      <Chip label="Canceled" color={core.primitive.ColorRed200.value} />
      <Chip
        label="Not in compliance"
        color={core.primitive.ColorRed300.value}
      />
      <Chip label="Not Serviced" color={core.primitive.ColorRed200.value} />
      <Chip label="Returned" color={core.primitive.ColorRed200.value} />
    </Flex>
  );
}

export default App;
