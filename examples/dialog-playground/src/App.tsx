import { Dialog, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ minHeight: "254.5px" }}>
      <Flex justifyContent="center" style={{ paddingBlock: "var(--size-12)" }}>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <Dialog.Header>Dialog Header</Dialog.Header>
          <Dialog.Content>This is the dialog body content.</Dialog.Content>
          <Dialog.Footer>
            <Flex gap="3" justifyContent="flex-end">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="primary">Continue</Button>
            </Flex>
          </Dialog.Footer>
        </Dialog>
      </Flex>
    </div>
  );
}

export default App;
