import { AiMark, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="2">
      <AiMark type="gradient" size="large" />
      <Text variant="headline" size="medium" el="h2">
        Created by Atlas
      </Text>
    </Flex>
  );
}

export default App;
