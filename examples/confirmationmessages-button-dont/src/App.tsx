import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "14rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Delete this job?</Dialog.Header>
        <Dialog.Content>
          Are you sure? If you delete this, it can not be recovered. This is
          permanent.
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="danger">Yes, I&apos;m sure</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
