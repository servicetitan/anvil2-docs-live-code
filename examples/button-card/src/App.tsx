import { ButtonCompound, Card, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <ButtonCompound onClick={console.log}>
      <Card flexDirection="column">
        <Text variant="headline" el="h2">
          Interactive Card
        </Text>
        <Text>You can click this card!</Text>
      </Card>
    </ButtonCompound>
  );
}

export default App;
