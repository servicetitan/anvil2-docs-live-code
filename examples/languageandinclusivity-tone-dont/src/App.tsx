import { Alert, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Alert
        title="Settings saved. We hope it worked."
        status="success"
        onClose={console.log}
      />
    </Flex>
  );
}

export default App;
