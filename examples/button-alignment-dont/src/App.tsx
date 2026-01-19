import { Button, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2">
      <Button appearance="secondary" style={{ width: 210 }}>
        Button
      </Button>
      <Button appearance="secondary" style={{ width: 210 }}>
        A slightly longer Button
      </Button>
      <Button appearance="secondary" style={{ width: 210 }}>
        Another Button
      </Button>
    </Flex>
  );
}

export default App;
