import { Flex, Chip, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Chip label="Beta" size="medium" color="#C1B6F2" />
      <Chip label="Active" size="medium" color="#89ECBC" />
      <Button>Button</Button>
    </Flex>
  );
}

export default App;
