import { List, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <List size="small">
        <List.Item>Small list item</List.Item>
        <List.Item>Second item</List.Item>
      </List>
      <List size="medium">
        <List.Item>Medium list item</List.Item>
        <List.Item>Second item</List.Item>
      </List>
      <List size="large">
        <List.Item>Large list item</List.Item>
        <List.Item>Second item</List.Item>
      </List>
    </Flex>
  );
}

export default App;
