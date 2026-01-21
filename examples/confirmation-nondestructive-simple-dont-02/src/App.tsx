import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "15rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Confirmation</Dialog.Header>
        <Dialog.Content>
          You are about to recalculate estimate tax using the actual
          configuration from zone 1 tax zone. Are you sure?
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="primary">Yes</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
