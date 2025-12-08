import { Card, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="3">
      <Card>Default</Card>
      <Card background="strong">Strong</Card>
      <Card background="stronger">Stronger</Card>
    </Flex>
  );
}

export default App;
