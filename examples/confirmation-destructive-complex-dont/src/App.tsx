import { Popover, Flex, Button, Text, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex
      gap="2"
      style={{
        paddingBlockStart: "16rem",
        paddingInlineEnd: "5rem",
      }}
    >
      <Button>Back</Button>
      <Popover open placement="top" disableShift disableFlip modal>
        <Popover.Button appearance="primary">Merge</Popover.Button>
        <Popover.Content>
          <Flex
            direction="column"
            gap="2"
            style={{ width: "200px", maxWidth: "100%" }}
          >
            <Text
              variant="headline"
              size="small"
              el="h4"
              style={{ color: "red" }}
            >
              Merge GL Accounts
            </Text>
            <Text>
              This will merge 2 GL accounts into the following account:
              Inventory.
            </Text>
            <Text>Type ‘Merge’ to confirm action</Text>
            <TextField />
          </Flex>
        </Popover.Content>
      </Popover>
    </Flex>
  );
}

export default App;
