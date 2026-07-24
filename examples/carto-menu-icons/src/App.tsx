import { Button, Menu } from "@servicetitan/carto-react-kit";
import {
  IconCopy,
  IconInbox,
  IconPencil,
} from "@servicetitan/carto-react-kit/icons";

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
