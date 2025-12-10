import { Menu } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "284px" }}>
      <Menu label="Click me!">
        <Menu.Item label="Item 1" />
        <Menu.Item label="Item 2" />
        <Menu.Item label="Item 3" />
      </Menu>
    </div>
  );
}

export default App;
