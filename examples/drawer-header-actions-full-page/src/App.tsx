import { Drawer, Flex, TextField, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Drawer open>
      <Drawer.Header
        actions={[
          { label: "Edit", onClick: () => {} },
          { label: "Duplicate", onClick: () => {} },
          { label: "Delete", onClick: () => {} },
        ]}
      >
        Header text
      </Drawer.Header>
      <Drawer.Content>
        <Flex direction="column" gap="6">
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField label="Email Address" />
        </Flex>
      </Drawer.Content>
      <Drawer.Footer sticky>
        <Drawer.CancelButton>Cancel</Drawer.CancelButton>
        <Button appearance="primary">Primary Action</Button>
      </Drawer.Footer>
    </Drawer>
  );
}

export default App;
