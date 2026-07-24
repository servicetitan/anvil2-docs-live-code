import { CartoTheme, TabbedLayout, Text } from "@servicetitan/carto-react-kit";
import type { TabbedLayoutTab } from "@servicetitan/carto-react-kit";
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

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 560,
          height: 160,
          border: "1px solid #ccc",
          overflow: "hidden",
        }}
      >
        <TabbedLayout tabs={tabs} defaultMode="vertical-split" />
      </div>
    </CartoTheme>
  );
}

export default App;
