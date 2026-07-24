import { Card, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        maxWidth: "33rem",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}
      >
        <Card
          href="https://example.com"
          label="Rest"
          content={<Text text="Rest" />}
        />
        <Card
          href="https://example.com"
          label="Hover"
          data-interactive="hover"
          content={<Text text="Hover" />}
        />
        <Card
          href="https://example.com"
          label="Focus"
          data-interactive="focus-visible"
          content={<Text text="Focus" />}
        />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}
      >
        <Card onPress={() => {}} label="Rest" content={<Text text="Rest" />} />
        <Card
          onPress={() => {}}
          label="Hover"
          data-interactive="hover"
          content={<Text text="Hover" />}
        />
        <Card
          onPress={() => {}}
          label="Focus"
          data-interactive="focus-visible"
          content={<Text text="Focus" />}
        />
        <Card
          onPress={() => {}}
          label="Disabled"
          isDisabled
          content={<Text text="Disabled" />}
        />
      </div>
    </div>
  );
}

export default App;
