import { Drawer, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Drawer open>
      <Drawer.Header>Header text</Drawer.Header>
      <Drawer.Content>Body text</Drawer.Content>
      <Drawer.Footer>
        <Drawer.CancelButton>Cancel</Drawer.CancelButton>
        <Button appearance="primary">Footer Button</Button>
      </Drawer.Footer>
    </Drawer>
  );
}

export default App;
