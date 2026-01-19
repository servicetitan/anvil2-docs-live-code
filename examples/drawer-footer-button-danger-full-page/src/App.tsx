import { Drawer, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Drawer open>
      <Drawer.Content></Drawer.Content>
      <Drawer.Footer sticky>
        <Drawer.CancelButton>Cancel</Drawer.CancelButton>
        <Button appearance="danger">Destructive Action</Button>
      </Drawer.Footer>
    </Drawer>
  );
}

export default App;
