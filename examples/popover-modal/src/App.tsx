import { Popover, Flex, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "284px" }}>
      <Flex gap="4" justifyContent="center" style={{ paddingTop: "4rem" }}>
        <Popover placement="top" modal>
          <Popover.Button>Toggle Popover</Popover.Button>
          <Popover.Content>
            <Flex gap="2" direction="column" style={{ maxWidth: "20rem" }}>
              <Text>
                Pressing &quot;tab&quot; will focus on this button, then go to
                the button outside of this popover.
              </Text>
              <Button>Example Button</Button>
            </Flex>
          </Popover.Content>
        </Popover>
        <Button>Example Button</Button>
      </Flex>
    </div>
  );
}

export default App;
