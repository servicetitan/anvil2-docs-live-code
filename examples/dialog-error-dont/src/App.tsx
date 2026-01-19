import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "18rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>There were errors with the submission</Dialog.Header>
        <Dialog.Content>
          <ul style={{ margin: 0 }}>
            <li>Password must be at least 8 characters.</li>
            <li>Submitted password was used in the last 6 months.</li>
          </ul>
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
