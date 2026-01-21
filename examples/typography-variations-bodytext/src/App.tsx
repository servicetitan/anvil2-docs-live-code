import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3">
      <Text size="xlarge">X-large, 1.5rem (24px @ 16px base)</Text>
      <Text size="large">Large, 1.25rem (20px @ 16px base)</Text>
      <Text>Medium(default), 1rem (16px @ 16px base)</Text>
      <Text size="small">Small, .875rem (14px @ 16px base)</Text>
    </Flex>
  );
}
export default App;
