import { Alert, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4}>
      <Alert status="info" title="Informational alert" />
      <Alert status="warning" title="Warning alert" />
      <Alert status="danger" title="Error alert" />
    </Flex>
  );
}

export default App;
