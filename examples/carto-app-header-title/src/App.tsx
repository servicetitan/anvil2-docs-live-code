import { AppHeader, CartoTheme } from "@servicetitan/carto-react-kit";
import { IconPanelLeft, IconX } from "@servicetitan/carto-react-kit/icons";
import "@servicetitan/carto-react-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 900,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* With title */}
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
            { id: "close", icon: <IconX />, label: "Close", onPress: () => {} },
          ]}
        />

        {/* Without title — action-only header */}
        <AppHeader
          leadingActions={[
            {
              id: "rail",
              icon: <IconPanelLeft />,
              label: "Toggle left panel",
              onPress: () => {},
            },
          ]}
          trailingActions={[
            { id: "close", icon: <IconX />, label: "Close", onPress: () => {} },
          ]}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
