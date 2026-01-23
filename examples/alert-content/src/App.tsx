import { Alert, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" flex="1">
      <Alert title="Alert title" onClose={() => console.log("onClose")} />
      <Alert title="Alert title" onClose={() => console.log("onClose")}>
        Body text to the alert.
      </Alert>
      <Alert title="Alert title" onClose={() => console.log("onClose")}>
        Body text to the alert.
        <Flex gap="3">
          <Button>Button</Button>
          <Button>Button</Button>
        </Flex>
      </Alert>
    </Flex>
  );
}

export default App;
