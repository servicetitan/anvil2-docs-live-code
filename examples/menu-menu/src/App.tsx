import { Menu } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "284px" }}>
      <Menu label="Actions">
        <Menu label="Move">
          <Menu.Item label="Move to Location A" onClick={console.log} />
          <Menu.Item label="Move to Location B" onClick={console.log} />
          <Menu.Item label="Move to Location C" onClick={console.log} />
        </Menu>
        <Menu label="Export">
          <Menu.Item label="Export as JPG" onClick={console.log} />
          <Menu.Item label="Export as PDF" onClick={console.log} />
          <Menu.Item label="Export as PNG" onClick={console.log} />
        </Menu>
      </Menu>
    </div>
  );
}

export default App;
