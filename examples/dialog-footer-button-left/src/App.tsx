import { Dialog, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "35rem", minHeight: "12rem" }}>
      <Dialog open size="large">
        <Dialog.Header>Header text</Dialog.Header>
        <Dialog.Content>Body text in the Dialog.</Dialog.Content>
        <Dialog.Footer>
          <Button>Back</Button>
          {/* spacer */}
          <Flex grow="1" />
          <Dialog.CancelButton>Cancel</Dialog.CancelButton>
          <Button appearance="primary">Next</Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
