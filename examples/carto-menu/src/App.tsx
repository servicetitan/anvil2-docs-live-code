import { Button, Menu } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ paddingTop: 16, display: "flex", justifyContent: "center" }}>
      <Menu
        trigger={<Button label="Options" variant="secondary" />}
        items={[
          { id: "rename", label: "Rename" },
          { id: "duplicate", label: "Duplicate" },
          { id: "archive", label: "Move to archive" },
          { id: "delete", label: "Delete" },
        ]}
        defaultOpen
      />
    </div>
  );
}

export default App;
