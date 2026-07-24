import { Button, Menu } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ paddingTop: 16, display: "flex", justifyContent: "center" }}>
      <Menu
        trigger={<Button label="Options" variant="secondary" />}
        selectionMode="multiple"
        defaultSelectedKeys={["archive"]}
        items={[
          { id: "rename", label: "Rename" },
          { id: "duplicate", label: "Duplicate", isDisabled: true },
          { id: "archive", label: "Move to archive", isDisabled: true },
          { id: "delete", label: "Delete" },
        ]}
        defaultOpen
      />
    </div>
  );
}

export default App;
