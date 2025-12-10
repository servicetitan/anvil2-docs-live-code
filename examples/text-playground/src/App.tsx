import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Text variant="headline" el="h2" size="large">
        Headline
      </Text>
      <Text variant="eyebrow" size="large">
        Eyebrow
      </Text>
      <Text variant="body">Body text. Lorem ipsum dolor sit amet.</Text>
    </Flex>
  );
}

export default App;
