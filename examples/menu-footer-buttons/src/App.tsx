import { Menu } from "@servicetitan/anvil2";
import Add from "@servicetitan/anvil2/assets/icons/material/round/add.svg";

function App() {
  return (
    <div style={{ minHeight: "400px" }}>
      <Menu
        label="Assign"
        searchable
        footerButtons={[
          { label: "Add technician", icon: Add, onClick: console.log },
        ]}
      >
        <Menu.Item label="Avery Jones" onClick={console.log} />
        <Menu.Item label="Sam Patel" onClick={console.log} />
        <Menu.Item label="Riley Chen" onClick={console.log} />
      </Menu>
    </div>
  );
}

export default App;
