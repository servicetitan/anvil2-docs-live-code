import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "14rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Delete Profile?</Dialog.Header>
        <Dialog.Content>
          Are you sure you want to delete this profile? This action cannot be
          undone.
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
