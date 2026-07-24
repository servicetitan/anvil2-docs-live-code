import { TabbedLayout, Text } from "@servicetitan/carto-react-kit";
import type { TabbedLayoutTab } from "@servicetitan/carto-react-kit";

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
    <div
      style={{
        width: 900,
        height: 420,
        border: "1px solid #ccc",
        overflow: "hidden",
      }}
    >
      <TabbedLayout tabs={tabs} />
    </div>
  );
}

export default App;
