import { Card, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap={6} direction="column" alignItems="flex-start">
      <Card padding="0">This card has no padding applied to it.</Card>
      <Card padding="xsmall">This card has 4px padding applied to it.</Card>
      <Card padding="small">This card has 8px padding applied to it.</Card>
      <Card padding="medium">This card has 16px padding applied to it.</Card>
      <Card padding="large">This card has 24px padding applied to it.</Card>
    </Flex>
  );
}

export default App;
