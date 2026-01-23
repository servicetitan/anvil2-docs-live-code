import { Dialog, Link, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "12rem" }}>
      <Dialog open>
        <Dialog.Header>Header text</Dialog.Header>
        <Dialog.Content>Body text in the Dialog.</Dialog.Content>
        <Dialog.Footer style={{ flexWrap: "wrap", alignItems: "center" }}>
          <Link>Learn more</Link>
          <Flex grow="1" />
          <Flex wrap="wrap" justifyContent="flex-end" gap="2">
            <Dialog.CancelButton>Cancel</Dialog.CancelButton>
            <Button appearance="primary">Primary</Button>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
