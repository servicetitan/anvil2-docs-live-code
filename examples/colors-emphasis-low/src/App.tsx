import { Flex, Chip, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Chip label="Draft" size="medium" />
      <Button appearance="ghost">Button</Button>
    </Flex>
  );
}

export default App;
