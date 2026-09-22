import { Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6" style={{ maxWidth: "30rem" }}>
      <Flex direction="column" gap="2">
        <Text variant="headline" el="h2">
          Customer
        </Text>
        <Text>Sophia Rodriguez</Text>
        <Text>(813) 364-0534</Text>
      </Flex>
      <Flex direction="column" gap="2">
        <Text variant="headline" el="h2">
          Job details
        </Text>
        <Text>
          Water heater diagnostic at 1420 Maple Ave., scheduled for July 12,
          2025, at 3:00 pm.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
