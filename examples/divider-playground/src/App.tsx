import { Divider, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Text variant="headline" el="h3">
        Headline text
      </Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      <Divider spacing="3" />

      <Text variant="headline" el="h3">
        Headline text
      </Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </Flex>
  );
}

export default App;
