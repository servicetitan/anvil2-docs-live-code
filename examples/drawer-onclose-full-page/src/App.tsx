import { Drawer, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header>Header text.</Drawer.Header>
        <Drawer.Content>Body text.</Drawer.Content>
        <Drawer.Footer>
          <Drawer.CancelButton onClick={() => setIsOpen(false)}>
            Cancel
          </Drawer.CancelButton>
          <Button appearance="primary" onClick={() => setIsOpen(false)}>
            Action
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}

export default App;
