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

function LargeArtifactHeader() {
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
          label: "Toggle artifact panel (large)",
          onPress: () => toggleArtifact({ width: "large" }),
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
      <div style={{ width: "70rem", height: 400 }}>
        <AppShell
          header={<LargeArtifactHeader />}
          rail={
            <RegionPlaceholder label="Rail region" background={"#dce4ea"} />
          }
          chat={
            <RegionPlaceholder label="Chat region" background={"#eeeeee"} />
          }
          artifact={
            <RegionPlaceholder label="Artifact region" background={"#9ecaff"} />
          }
          defaultArtifactWidth="large"
        />
      </div>
    </CartoTheme>
  );
}

export default App;
