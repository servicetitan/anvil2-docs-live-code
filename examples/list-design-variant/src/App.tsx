import { List, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <List>
        <List.Item>Bullet one</List.Item>
        <List.Item>Bullet two</List.Item>
        <List.Item>Bullet three</List.Item>
      </List>
      <List variant="ordered">
        <List.Item>Step one</List.Item>
        <List.Item>Step two</List.Item>
        <List.Item>Step three</List.Item>
      </List>
    </Flex>
  );
}

export default App;
