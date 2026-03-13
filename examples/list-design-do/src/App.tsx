import { List, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2">
      <Text variant="headline" el="h3" size="medium">
        Section title
      </Text>
      <List>
        <List.Item>First requirement</List.Item>
        <List.Item>Second requirement</List.Item>
        <List.Item>Third requirement</List.Item>
      </List>
    </Flex>
  );
}

export default App;
