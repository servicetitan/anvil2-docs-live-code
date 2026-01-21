import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3">
      <Text el="h4" variant="headline" size="xlarge">
        X-large, 2rem (32px @ 16px base)
      </Text>
      <Text el="h4" variant="headline" size="large">
        Large, 1.5rem (24px @ 16px base)
      </Text>
      <Text el="h4" variant="headline">
        Medium(default), 1.25rem (20px @ 16px base)
      </Text>
      <Text el="h4" variant="headline" size="small">
        Small, 1rem (16px @ 16px base)
      </Text>
    </Flex>
  );
}
export default App;
