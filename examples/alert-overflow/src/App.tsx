import { Alert, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Alert
      title="An alert title will wrap when not enough space is available for it."
      style={{ maxWidth: 325 }}
    >
      Content inside the Alert will overflow depending on how it is implemented,
      with the most typical being wrapping.
      <Flex gap="3">
        <Button>Button</Button>
        <Button>Button</Button>
      </Flex>
    </Alert>
  );
}

export default App;
