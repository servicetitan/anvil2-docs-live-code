import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "14rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Merge GL accounts?</Dialog.Header>
        <Dialog.Content>
          2 GL accounts will be merged into the following account: Inventory.
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
