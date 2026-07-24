import { Button, Menu } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ paddingTop: 16, display: "flex", justifyContent: "center" }}>
      <Menu
        trigger={<Button label="Columns" variant="secondary" />}
        items={[
          { id: "name", label: "Name" },
          { id: "modified", label: "Last modified" },
          { id: "created", label: "Date created" },
          { id: "size", label: "Size" },
        ]}
        selectionMode="multiple"
        defaultSelectedKeys={["name", "size"]}
        defaultOpen
      />
    </div>
  );
}

export default App;
