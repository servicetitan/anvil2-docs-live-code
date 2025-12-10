import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Text size="small" variant="body">
        Small body text
      </Text>
      <Text size="medium" variant="body">
        Medium body text
      </Text>
      <Text size="large" variant="body">
        Large body text
      </Text>
      <Text size="xlarge" variant="body">
        X-Large body text
      </Text>
    </Flex>
  );
}

export default App;
