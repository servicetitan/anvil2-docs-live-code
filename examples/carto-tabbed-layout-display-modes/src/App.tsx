import { CartoTheme, TabbedLayout, Text } from "@servicetitan/carto-react-kit";
import type {
  TabbedLayoutMode,
  TabbedLayoutTab,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const tabs: TabbedLayoutTab[] = [
  {
    key: "tab-a",
    label: "Tab Name A",
    content: <Text text="Tab A contents." />,
  },
  {
    key: "tab-b",
    label: "Tab Name B",
    content: <Text text="Tab B contents." />,
  },
];

function Labeled({ label, mode }: { label: string; mode: TabbedLayoutMode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Text variant="eyebrow" text={label} />
      <div
        style={{
          width: 820,
          height: 220,
          border: "1px solid #ccc",
          overflow: "hidden",
        }}
      >
        <TabbedLayout tabs={tabs} defaultMode={mode} />
      </div>
    </div>
  );
}

function App() {
  return (
    <CartoTheme>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Labeled label="Stacked" mode="stacked" />
        <Labeled label="Vertical Split" mode="vertical-split" />
        <Labeled label="Horizontal Split" mode="horizontal-split" />
      </div>
    </CartoTheme>
  );
}

export default App;
