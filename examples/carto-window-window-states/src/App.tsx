import {
  AppHeader,
  CartoTheme,
  Text,
  Window,
  useAppSurface,
} from "@servicetitan/carto-react-kit";
import { IconMinimize2, IconX } from "@servicetitan/carto-react-kit/icons";
import "@servicetitan/carto-react-kit/styles.css";

function WindowHeader() {
  const { toggleSize, close } = useAppSurface();
  return (
    <AppHeader
      title="Title of conversation"
      trailingActions={[
        {
          id: "size",
          icon: <IconMinimize2 />,
          label: "Restore",
          onPress: toggleSize,
        },
        { id: "close", icon: <IconX />, label: "Close", onPress: close },
      ]}
    />
  );
}

function App() {
  return (
    <CartoTheme>
      <div style={{ position: "fixed", inset: 0, background: "#e9ecf1" }}>
        <Window
          defaultState="fullscreen"
          header={<WindowHeader />}
          chat={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Text text="Chat content" />
            </div>
          }
        />
      </div>
    </CartoTheme>
  );
}

export default App;
