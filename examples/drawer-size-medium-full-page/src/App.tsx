import { Drawer, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Drawer open>
      <Drawer.Header>Header text</Drawer.Header>
      <Drawer.Content>Body text in the Drawer.</Drawer.Content>
      <Drawer.Footer sticky>
        <Drawer.CancelButton>Cancel</Drawer.CancelButton>
        <Button appearance="primary">Primary Action</Button>
      </Drawer.Footer>
    </Drawer>
  );
}

export default App;
