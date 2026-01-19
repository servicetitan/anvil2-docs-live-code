import { Card, ButtonCompound, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <ButtonCompound onClick={() => alert("Clicked!")}>
      <Card flexDirection="column">
        <Text variant="headline" size="medium" el="h2">
          AI-driven intelligence
        </Text>
        <Text variant="body">
          Learn how Titan Intelligence can supercharge your business. Get
          started now.
        </Text>
        <Button appearance="primary" style={{ marginTop: "1rem" }}>
          Get started
        </Button>
      </Card>
    </ButtonCompound>
  );
}

export default App;
