import { AppHeader, CartoTheme } from "@servicetitan/anvil2-ai-kit";
import {
  IconMinimize2,
  IconPanelLeft,
  IconPanelRight,
  IconX,
} from "@servicetitan/anvil2-icons";
import "@servicetitan/anvil2-ai-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div style={{ width: 420 }}>
        <AppHeader
          title="A very long conversation title that truncates once it collides with the action clusters"
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
            { id: "close", icon: <IconX />, label: "Close", onPress: () => {} },
          ]}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
