import { Alert, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" flex="1">
      <Alert title="Info Alert" onClose={() => console.log("info onClose")} />
      <Alert
        title="Success Alert"
        status="success"
        onClose={() => console.log("success onClose")}
      />
      <Alert
        title="Warning Alert"
        status="warning"
        onClose={() => console.log("warning onClose")}
      />
      <Alert
        title="Danger Alert"
        status="danger"
        onClose={() => console.log("danger onClose")}
      />
    </Flex>
  );
}

export default App;
