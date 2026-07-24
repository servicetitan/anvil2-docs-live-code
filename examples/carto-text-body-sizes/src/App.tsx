import { Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Text size="featured" text="Body — featured: the quick brown fox" />
      <Text size="regular" text="Body — regular: the quick brown fox" />
      <Text size="compact" text="Body — compact: the quick brown fox" />
      <Text size="fine" text="Body — fine: the quick brown fox" />
    </div>
  );
}

export default App;
