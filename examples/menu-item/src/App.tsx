import { Menu, Divider } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "284px" }}>
      <Menu label="Actions">
        <Menu.Item label="Save" onClick={console.log} />
        <Menu.Item label="Save As" onClick={console.log} />
        <Menu.Item label="Rename" onClick={console.log} />
        <Divider spacing="half" />
        <Menu.Item label="Delete" onClick={console.log} />
      </Menu>
    </div>
  );
}

export default App;
