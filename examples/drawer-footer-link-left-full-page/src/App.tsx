import { Drawer, Link, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Drawer open>
      <Drawer.Content></Drawer.Content>
      <Drawer.Footer sticky>
        <Link style={{ alignSelf: "center" }}>Learn more</Link>
        {/* spacer */}
        <Flex grow="1" />
        <Drawer.CancelButton>Cancel</Drawer.CancelButton>
        <Button appearance="primary">Primary Action</Button>
      </Drawer.Footer>
    </Drawer>
  );
}

export default App;
