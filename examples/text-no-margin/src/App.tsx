import { Text, Chip, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex alignItems="center" gap="2">
      <Text variant="headline" el="h2" size="large" noMargin>
        Invoices
      </Text>
      <Chip label="Draft" />
    </Flex>
  );
}

export default App;
