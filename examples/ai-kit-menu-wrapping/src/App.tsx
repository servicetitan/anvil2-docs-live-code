import { Button, Menu } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <div style={{ paddingTop: 16, display: "flex", justifyContent: "center" }}>
      <Menu
        trigger={<Button label="Options" variant="secondary" />}
        items={[
          { id: "short", label: "Rename" },
          {
            id: "long",
            label:
              "Move this item to a different project workspace and notify collaborators",
          },
          { id: "delete", label: "Delete" },
        ]}
        defaultOpen
      />
    </div>
  );
}

export default App;
