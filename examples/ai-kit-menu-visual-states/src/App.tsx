import { Button, Menu } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <div style={{ paddingTop: 16, display: "flex", justifyContent: "center" }}>
      <Menu
        trigger={<Button label="Options" variant="secondary" />}
        selectionMode="multiple"
        defaultSelectedKeys={["selected", "selected-disabled"]}
        items={[
          { id: "default", label: "Default" },
          { id: "hover", label: "Hover target" },
          { id: "focus", label: "Focus target" },
          { id: "disabled", label: "Disabled", isDisabled: true },
          { id: "selected", label: "Selected" },
          {
            id: "selected-disabled",
            label: "Selected, disabled",
            isDisabled: true,
          },
        ]}
        defaultOpen
      />
    </div>
  );
}

export default App;
