import { Card, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: "20rem",
      }}
    >
      <Card content={<Text text="Static — a non-interactive surface." />} />
      <Card
        href="https://example.com"
        label="Open example.com"
        content={<Text text="Link — the whole card is a link." />}
      />
      <Card
        onPress={() => {}}
        label="Run example action"
        content={<Text text="Button — the whole card is a button." />}
      />
    </div>
  );
}

export default App;
