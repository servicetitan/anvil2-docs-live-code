import { CartoTheme, TabbedLayout, Text } from "@servicetitan/carto-react-kit";
import type { TabbedLayoutTab } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const tabs: TabbedLayoutTab[] = [
  {
    key: "doc",
    label: "Document",
    content: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i} style={{ marginTop: i === 0 ? 0 : undefined }}>
            Paragraph {i + 1}. Overflowing content scrolls within the panel's
            padding, not flush to its edge.
          </p>
        ))}
      </>
    ),
  },
  { key: "notes", label: "Notes", content: <Text text="Short notes." /> },
];

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          width: 900,
          height: 320,
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
