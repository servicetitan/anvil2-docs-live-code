import { Alert, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Alert
        title="You’ve successfully saved your settings."
        status="success"
        onClose={console.log}
      >
        Please continue to the next section.
      </Alert>
    </Flex>
  );
}

export default App;
