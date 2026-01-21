import { Text, Flex, Divider } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3">
      <Flex direction="column">
        <Text variant="headline" size="xlarge" el="h4">
          Headline xLarge
        </Text>
        <Text variant="eyebrow" size="large">
          Body Large
        </Text>
      </Flex>
      <Divider />
      <Flex direction="column">
        <Text variant="headline" el="h4">
          Headline Default
        </Text>
        <Text variant="eyebrow" size="small">
          Body Small
        </Text>
      </Flex>
      <Divider />
      <Flex direction="column">
        <Text variant="headline" size="small" el="h4">
          Headline Large
        </Text>
        <Text variant="eyebrow" size="large">
          Body Large
        </Text>
      </Flex>
    </Flex>
  );
}
export default App;
