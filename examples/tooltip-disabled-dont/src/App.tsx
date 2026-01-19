import { Tooltip, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex
      gap={3}
      style={{
        paddingBlockStart: "2.5rem",
        paddingInlineStart: "5rem",
      }}
      justifyContent="center"
    >
      <Button>Cancel</Button>
      <Tooltip open placement="top-end">
        <Tooltip.Trigger>
          <Button appearance="primary" disabled>
            Submit
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          Tooltip to explain why this is disabled.
        </Tooltip.Content>
      </Tooltip>
    </Flex>
  );
}

export default App;
