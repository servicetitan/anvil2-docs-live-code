import { CartoTheme, TabbedLayout, Text } from "@servicetitan/carto-react-kit";
import type { TabbedLayoutTab } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const tabs: TabbedLayoutTab[] = [
  {
    key: "preview",
    label: "Preview",
    content: <Text text="Preview contents." />,
  },
];

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 420,
          height: 140,
          padding: 8,
          background: "#e0e0e0",
        }}
      >
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <TabbedLayout tabs={tabs} />
        </div>
      </div>
    </CartoTheme>
  );
}

export default App;
