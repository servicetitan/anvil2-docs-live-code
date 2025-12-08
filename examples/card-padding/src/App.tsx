import { Card, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="3" direction="column">
      <Card padding="0">0</Card>
      <Card padding="xsmall">xsmall</Card>
      <Card padding="small">small</Card>
      <Card padding="medium">medium (default)</Card>
      <Card padding="large">large</Card>
    </Flex>
  );
}

export default App;
