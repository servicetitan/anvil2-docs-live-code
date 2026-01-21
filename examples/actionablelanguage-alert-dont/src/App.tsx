import { Alert, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Alert title="Error 404" status="danger" onClose={console.log} />
    </Flex>
  );
}

export default App;
