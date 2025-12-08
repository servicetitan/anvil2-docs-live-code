import { Card, ButtonCompound, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <ButtonCompound onClick={() => alert("You clicked the card!")}>
      <Card flexDirection="column">
        <Text variant="headline" el="h2">
          Interactive Card
        </Text>
        <Text>
          This card has some basic info, but you can click to view more.
        </Text>
      </Card>
    </ButtonCompound>
  );
}

export default App;
