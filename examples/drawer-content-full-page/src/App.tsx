import {
  Drawer,
  Flex,
  TextField,
  Radio,
  RadioGroup,
  Button,
} from "@servicetitan/anvil2";

function App() {
  return (
    <Drawer open>
      <Drawer.Header>Header text</Drawer.Header>
      <Drawer.Content>
        <Flex direction="column" gap="6">
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField label="Email Address" />
          <RadioGroup legend="My function is">
            <Radio name="role" value="designer" label="Designer" />
            <Radio name="role" value="developer" label="Developer" />
            <Radio name="role" value="pm" label="Product Manager" />
          </RadioGroup>
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
