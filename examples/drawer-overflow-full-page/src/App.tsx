import { Drawer, Link, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Drawer open>
      <Drawer.Header>
        Drawer Title that Will Overflow to Another Line with Enough Words
      </Drawer.Header>
      <Drawer.Content>Body text in the Drawer.</Drawer.Content>
      <Drawer.Footer style={{ flexWrap: "wrap" }} sticky>
        <Link
          style={{
            alignSelf: "center",
            flexGrow: "1",
            justifyContent: "flex-end",
          }}
        >
          Learn more
        </Link>
        <Flex wrap="wrap" justifyContent="flex-end" gap="2">
          <Drawer.CancelButton>
            A Very Long Secondary Action that Wraps
          </Drawer.CancelButton>
          <Button appearance="primary">A Longer Primary Action</Button>
        </Flex>
      </Drawer.Footer>
    </Drawer>
  );
}

export default App;
