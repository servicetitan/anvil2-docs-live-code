import { Tooltip, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex
      gap={3}
      style={{ paddingBlockStart: "5.5rem", paddingInline: "3rem" }}
      justifyContent="center"
    >
      <Tooltip open placement="top">
        <Tooltip.Trigger>
          <Button>Foo Button</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <Flex
            gap="3"
            direction="column"
            style={{
              color: "inherit",
              padding: "4px",
            }}
          >
            Used in the invoice of a bar.
            <Button size="small" appearance="primary">
              Learn more
            </Button>
          </Flex>
        </Tooltip.Content>
      </Tooltip>
    </Flex>
  );
}

export default App;
