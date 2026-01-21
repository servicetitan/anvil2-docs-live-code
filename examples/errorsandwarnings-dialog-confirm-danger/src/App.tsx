import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ padding: "7rem 11.5rem" }}>
      <Dialog open>
        <Dialog.Header>Delete email?</Dialog.Header>
        <Dialog.Content>
          Are you sure you want to delete this email and it scheduling interval?
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="danger">Delete</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
