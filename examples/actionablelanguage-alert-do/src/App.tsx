import { Alert, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Alert
        title="Invalid email address"
        status="danger"
        onClose={console.log}
      >
        Please enter a valid email.
      </Alert>
    </Flex>
  );
}

export default App;
