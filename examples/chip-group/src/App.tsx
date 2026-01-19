import { Chip, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap={2}>
      <Chip label="Cat" />
      <Chip label="Dog" />
      <Chip label="Fish" />
    </Flex>
  );
}

export default App;
