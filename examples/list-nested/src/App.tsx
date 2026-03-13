import { List } from "@servicetitan/anvil2";

function App() {
  return (
    <List>
      <List.Item>
        Parent item one
        <List variant="ordered">
          <List.Item>Sub-step one</List.Item>
          <List.Item>Sub-step two</List.Item>
        </List>
      </List.Item>
      <List.Item>Parent item two</List.Item>
    </List>
  );
}

export default App;
