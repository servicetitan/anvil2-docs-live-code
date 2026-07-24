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
      <Card
        onPress={() => {}}
        label="Run this action"
        content={<Text text="This card is a button." />}
      />
      <Card
        href="https://example.com"
        label="Open example.com"
        content={<Text text="This card is a link." />}
      />
    </div>
  );
}

export default App;
