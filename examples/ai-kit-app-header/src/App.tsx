import { AppHeader } from "@servicetitan/anvil2-ai-kit";
import {
  IconMinimize2,
  IconPanelLeft,
  IconPanelRight,
  IconX,
} from "@servicetitan/anvil2-icons";

function App() {
  return (
    <div style={{ width: 900 }}>
      <AppHeader
        title="Title of conversation"
        leadingActions={[
          {
            id: "rail",
            icon: <IconPanelLeft />,
            label: "Toggle left panel",
            onPress: () => {},
          },
        ]}
        trailingActions={[
          {
            id: "artifact",
            icon: <IconPanelRight />,
            label: "Toggle right panel",
            onPress: () => {},
          },
          {
            id: "minimize",
            icon: <IconMinimize2 />,
            label: "Minimize",
            onPress: () => {},
          },
          {
            id: "close",
            icon: <IconX />,
            label: "Close",
            onPress: () => {},
          },
        ]}
      />
    </div>
  );
}

export default App;
