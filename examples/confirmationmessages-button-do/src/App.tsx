import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "12rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Delete this job?</Dialog.Header>
        <Dialog.Content>This action cannot be undone.</Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="danger">Delete Job</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
