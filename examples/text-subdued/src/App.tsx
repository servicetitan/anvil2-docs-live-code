import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6">
      <Text variant="body">Regular</Text>
      <Text variant="body" subdued>
        Subdued
      </Text>
    </Flex>
  );
}

export default App;
