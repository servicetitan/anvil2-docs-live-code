import {
  AppHeader,
  CartoTheme,
  Text,
  Window,
  useAppSurface,
} from "@servicetitan/carto-react-kit";
import {
  IconGrip,
  IconMaximize2,
  IconX,
} from "@servicetitan/carto-react-kit/icons";
import "@servicetitan/carto-react-kit/styles.css";

// A marker at the panel's default anchor (bottom-right, 24px inset — matching
// the docked panel's own resting corner) so a screenshot of the dragged panel
// still shows where it started, proving it moved.
function DefaultCornerMarker() {
  return (
    <div
      style={{
        position: "fixed",
        insetBlockEnd: 24,
        insetInlineEnd: 24,
        width: 120,
        height: 48,
        border: "2px dashed #99a3ad",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text size="fine" text="Default corner" />
    </div>
  );
}

function WindowHeader() {
  const { toggleSize, close, dragHandleProps } = useAppSurface();
  return (
    <AppHeader
      title="Title of conversation"
      leadingActions={[
        {
          id: "drag",
          icon: <IconGrip />,
          label: "Move window",
          dragHandleProps,
        },
      ]}
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
        <DefaultCornerMarker />
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
