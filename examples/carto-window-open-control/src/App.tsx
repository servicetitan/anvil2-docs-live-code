import { useRef } from "react";
import {
  AppHeader,
  Button,
  CartoTheme,
  Text,
  Window,
  useAppSurface,
} from "@servicetitan/carto-react-kit";
import type { AppSurfaceHandle } from "@servicetitan/carto-react-kit";
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
  const ctrl = useRef<AppSurfaceHandle>(null);

  return (
    <CartoTheme>
      <div style={{ position: "fixed", inset: 0, background: "#e9ecf1" }}>
        <div style={{ position: "fixed", top: 24, left: 24 }}>
          <Button label="Open chat" onPress={() => ctrl.current?.open()} />
        </div>
        <Window
          controlRef={ctrl}
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
