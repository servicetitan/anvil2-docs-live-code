import {
  AppHeader,
  CartoTheme,
  Text,
  Window,
  useAppSurface,
} from "@servicetitan/carto-react-kit";
import { IconMaximize2, IconX } from "@servicetitan/carto-react-kit/icons";
import "@servicetitan/carto-react-kit/styles.css";

function WindowHeader() {
  const { toggleSize, close } = useAppSurface();
  return (
    <AppHeader
      title="Title of conversation"
      trailingActions={[
        {
          id: "size",
          icon: <IconMaximize2 />,
          label: "Maximize",
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
