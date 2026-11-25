import { Menu } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "400px" }}>
      <Menu label="Add" searchable searchPlaceholder="Search actions">
        <Menu.Group label="Create from">
          <Menu.Item label="Template" onClick={console.log} />
          <Menu.Item label="Estimate" onClick={console.log} />
        </Menu.Group>
        <Menu.Group label="Import">
          <Menu.Item label="From CSV" onClick={console.log} />
          <Menu.Item
            label="From API"
            searchText="endpoint"
            onClick={console.log}
          />
        </Menu.Group>
      </Menu>
    </div>
  );
}

export default App;
