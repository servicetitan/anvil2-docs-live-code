import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "12.5rem" }}>
      <Dialog open>
        <Dialog.Header>[Action][Item]</Dialog.Header>
        <Dialog.Content>Dialog text for a description.</Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="danger">[Action][Item]</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
