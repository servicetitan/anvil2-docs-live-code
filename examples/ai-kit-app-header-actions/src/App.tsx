import { AppHeader, CartoTheme } from "@servicetitan/anvil2-ai-kit";
import {
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
            },
            { id: "close", icon: <IconX />, label: "Close", onPress: () => {} },
          ]}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
