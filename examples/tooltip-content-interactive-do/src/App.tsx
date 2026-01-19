import { Tooltip, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex
      gap={3}
      style={{ paddingBlockStart: "2.5rem" }}
      justifyContent="center"
    >
      <Tooltip open placement="top">
        <Tooltip.Trigger>
          <Button>Foo Button</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Used in the invoice of a bar.</Tooltip.Content>
      </Tooltip>
    </Flex>
  );
}

export default App;
