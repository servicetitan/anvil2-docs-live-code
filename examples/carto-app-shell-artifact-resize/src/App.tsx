import {
  AppHeader,
  AppShell,
  CartoTheme,
  Text,
  useAppSurface,
} from "@servicetitan/carto-react-kit";
import {
  IconPanelLeft,
  IconPanelRight,
} from "@servicetitan/carto-react-kit/icons";
import "@servicetitan/carto-react-kit/styles.css";

function ShellHeader() {
  const { toggleRail, toggleArtifact } = useAppSurface();
  return (
    <AppHeader
      title="Title of conversation"
      leadingActions={[
        {
          id: "rail",
          icon: <IconPanelLeft />,
          label: "Toggle rail",
          onPress: toggleRail,
        },
      ]}
      trailingActions={[
        {
          id: "artifact",
          icon: <IconPanelRight />,
          label: "Toggle artifact panel",
          onPress: toggleArtifact,
        },
      ]}
    />
  );
}

function RegionPlaceholder({
  label,
  background,
}: {
  label: string;
  background: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: 24,
        backgroundColor: background,
      }}
    >
      <Text text={label} />
    </div>
  );
}

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "76rem", height: 400 }}>
        <AppShell
          header={<ShellHeader />}
          chat={
            <RegionPlaceholder label="Chat region" background={"#eeeeee"} />
          }
          artifact={
            <RegionPlaceholder label="Artifact region" background={"#9ecaff"} />
          }
        />
      </div>
    </CartoTheme>
  );
}

export default App;
