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
              disabled: true,
            },
            {
              id: "minimize",
              icon: <IconMinimize2 />,
              label: "Minimize",
              onPress: () => {},
              disabled: true,
            },
            { id: "close", icon: <IconX />, label: "Close", onPress: () => {} },
          ]}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
