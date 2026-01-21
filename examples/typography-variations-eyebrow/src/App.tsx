import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3">
      <Text variant="eyebrow" size="large">
        Large, 1rem (16px @ 16px base)
      </Text>
      <Text variant="eyebrow">Medium(default), .875rem (14px @ 16px base)</Text>
      <Text variant="eyebrow" size="small">
        Small, .625rem (10px @ 16px base)
      </Text>
    </Flex>
  );
}
export default App;
