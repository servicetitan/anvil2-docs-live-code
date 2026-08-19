import { Button, Menu } from "@servicetitan/anvil2-ai-kit";
import { IconCopy, IconInbox, IconPencil } from "@servicetitan/anvil2-icons";

function App() {
  return (
    <div style={{ paddingTop: 16, display: "flex", justifyContent: "center" }}>
      <Menu
        trigger={<Button label="Options" variant="secondary" />}
        items={[
          { id: "rename", label: "Rename", icon: <IconPencil /> },
          { id: "duplicate", label: "Duplicate", icon: <IconCopy /> },
          { id: "archive", label: "Move to archive", icon: <IconInbox /> },
        ]}
        defaultOpen
      />
    </div>
  );
}

export default App;
