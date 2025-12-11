import { Tooltip, Card, Button, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "284px" }}>
      <Card
        gap={4}
        alignItems="center"
        style={{
          background: "var(--background-color-inverted-strong)",
        }}
      >
        <Tooltip offset={24}>
          <Tooltip.Trigger>
            <Button appearance="primary">Hover over me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content style={{ maxWidth: "20rem" }}>
            Prevent the tooltip background from getting lost in the card
            background.
          </Tooltip.Content>
        </Tooltip>
        <Text
          style={{
            color: "var(--foreground-color-inverted)",
          }}
        >
          Lorem ipsum dolor sit amet.
        </Text>
      </Card>
    </div>
  );
}

export default App;
