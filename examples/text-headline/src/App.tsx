import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Text el="h4" size="small" variant="headline">
        H4 Headline
      </Text>
      <Text el="h3" size="medium" variant="headline">
        H3 Headline
      </Text>
      <Text el="h2" size="large" variant="headline">
        H2 Headline
      </Text>
      <Text el="h1" size="xlarge" variant="headline">
        H1 Headline
      </Text>
    </Flex>
  );
}

export default App;
