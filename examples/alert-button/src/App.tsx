import { Alert, Text, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Alert status="danger" title="Problem loading data">
      <Text>
        There was an error loading the page data. Please refresh the page.
      </Text>
      <Flex gap={4}>
        <Button>Refresh Page</Button>
        <Button>Message Support</Button>
      </Flex>
    </Alert>
  );
}

export default App;
