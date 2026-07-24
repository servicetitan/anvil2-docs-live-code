import { Card, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
      }}
    >
      <Card padding="snug" content={<Text text="Snug padding — 12px." />} />
      <Card
        padding="base"
        content={<Text text="Base padding — 16px (default)." />}
      />
      <Card
        padding="relaxed"
        content={<Text text="Relaxed padding — 24px." />}
      />
    </div>
  );
}

export default App;
