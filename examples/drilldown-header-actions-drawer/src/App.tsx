import {
  Drawer,
  DrillDown,
  useDrillDown,
  Button,
  Flex,
  TextField,
} from "@servicetitan/anvil2";
import { useLayoutEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  const { drillDownProps, setIndex, back } = useDrillDown();

  // Set the initial index after components have registered
  useLayoutEffect(() => {
    setTimeout(() => {
      setIndex(0);
    }, 400);
  }, [setIndex]);

  return (
    <Drawer
      {...drillDownProps}
      open={open}
      onClose={() => setOpen(false)}
      size="medium"
    >
      <Drawer.Header>Customer</Drawer.Header>
      <Drawer.Content>
        <Button onClick={() => setIndex(0)}>Edit contact</Button>
      </Drawer.Content>

      <DrillDown index={0} onClose={() => setOpen(false)}>
        <DrillDown.Header
          actions={[
            { label: "Edit", onClick: () => {} },
            { label: "Duplicate", onClick: () => {} },
            { label: "Delete", onClick: () => {} },
          ]}
        >
          Contact
        </DrillDown.Header>
        <DrillDown.Content>
          <Flex direction="column" gap="6">
            <TextField label="First Name" />
            <TextField label="Last Name" />
            <TextField label="Email Address" />
          </Flex>
        </DrillDown.Content>
        <DrillDown.Footer>
          <Flex gap="3" justifyContent="flex-end">
            <Button appearance="primary" onClick={back}>
              Apply
            </Button>
          </Flex>
        </DrillDown.Footer>
      </DrillDown>
    </Drawer>
  );
}

export default App;
