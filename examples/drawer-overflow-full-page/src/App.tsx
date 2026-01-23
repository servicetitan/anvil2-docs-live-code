import { Drawer, Link, Flex, Button } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Drawer open>
      <Drawer.Header>
        Drawer Title that Will Overflow to Another Line with Enough Words
      </Drawer.Header>
      <Drawer.Content>Body text in the Drawer.</Drawer.Content>
      <Drawer.Footer
        style={{
          flexWrap: "wrap",
          alignItems: "center",
        }}
        sticky
      >
        <Link
          style={{
            marginTop: core.primitive?.Size2?.value,
            marginBottom: core.primitive?.Size2?.value,
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
