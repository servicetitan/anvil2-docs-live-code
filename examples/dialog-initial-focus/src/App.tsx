import { Dialog, Flex, Button, TextField } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ minHeight: "320px" }}>
      <Flex justifyContent="center" style={{ paddingBlock: "var(--size-12)" }}>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          initialFocusResolver={(focusables) =>
            focusables.find(
              // Focus the save button when the dialog opens
              (el) =>
                el.textContent === "Save" && el instanceof HTMLButtonElement,
            ) || focusables[0]
          }
        >
          <Dialog.Header>Add New Contact</Dialog.Header>
          <Dialog.Content>
            <Flex direction="column" gap="4">
              <TextField
                label="Name"
                name="name"
                autoComplete="off"
                value="John"
              />
              <TextField
                label="Email"
                name="email"
                autoComplete="off"
                value="john@example.com"
              />
              <TextField
                label="Phone"
                name="phone"
                autoComplete="off"
                value="123-456-7890"
              />
            </Flex>
          </Dialog.Content>
          <Dialog.Footer>
            <Flex gap="3" justifyContent="flex-end">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="primary">Save</Button>
            </Flex>
          </Dialog.Footer>
        </Dialog>
      </Flex>
    </div>
  );
}

export default App;
