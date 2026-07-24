import { Button, Menu } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "160px 0 16px",
      }}
    >
      <Menu
        trigger={<Button label="Options" variant="secondary" />}
        items={[
          { id: "rename", label: "Rename" },
          { id: "duplicate", label: "Duplicate" },
          { id: "delete", label: "Delete" },
        ]}
        placement="top"
        defaultOpen
      />
    </div>
  );
}

export default App;
