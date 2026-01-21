import { Dialog, Flex, Button, Text, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "19rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Merge GL accounts?</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="2">
            <Text>
              2 GL accounts will be merged into the following account: Inventory
            </Text>
            <TextField hint="Type MERGE to confirm" required />
          </Flex>
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="danger">Merge GL Accounts</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
