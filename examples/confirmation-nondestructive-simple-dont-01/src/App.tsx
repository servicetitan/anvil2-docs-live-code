import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "14rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Confirmation activation</Dialog.Header>
        <Dialog.Content>
          The campaign will be immediately activated.
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="danger">Confirm</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
