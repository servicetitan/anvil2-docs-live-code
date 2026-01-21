import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ padding: "7rem 11.5rem" }}>
      <Dialog open>
        <Dialog.Header>Save for later?</Dialog.Header>
        <Dialog.Content>
          You can always set up this campaign at a later time.
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="primary">Save</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
