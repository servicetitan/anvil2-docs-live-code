import { Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Text
        variant="headline"
        el="h2"
        size="major"
        highlighted
        text="Revised headline"
      />
      <Text highlighted text="Revised body copy" />
      <Text variant="eyebrow" highlighted text="Revised label" />
      <div>
        <Text inline text="Partial inline " />
        <Text inline highlighted text="highlight" />
      </div>
    </div>
  );
}

export default App;
