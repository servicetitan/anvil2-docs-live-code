import { Dialog, Link, Flex, Button } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <div style={{ minWidth: "23rem", minHeight: "15rem" }}>
      <Dialog open>
        <Dialog.Header>Header text</Dialog.Header>
        <Dialog.Content>Body text in the Dialog.</Dialog.Content>
        <Dialog.Footer style={{ flexWrap: "wrap" }}>
          <Link
            style={{
              marginTop: core.primitive?.Size2?.value,
              marginBottom: core.primitive?.Size2?.value,
            }}
          >
            Learn more
          </Link>
          <Flex wrap="wrap" justifyContent="flex-end" gap="2">
            <Dialog.CancelButton>Cancel</Dialog.CancelButton>
            <Button appearance="primary">Primary Action</Button>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
