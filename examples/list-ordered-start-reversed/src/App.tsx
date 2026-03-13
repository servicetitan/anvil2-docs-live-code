import { List, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <List variant="ordered" start={5}>
        <List.Item>Five</List.Item>
        <List.Item>Six</List.Item>
      </List>
      <List variant="ordered" reversed>
        <List.Item>Third</List.Item>
        <List.Item>Second</List.Item>
        <List.Item>First</List.Item>
      </List>
    </Flex>
  );
}

export default App;
