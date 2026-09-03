import { Popover, Flex, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center">
      <Popover placement="top" defaultOpen>
        <Popover.Button>Toggle Popover</Popover.Button>
        <Popover.Content>
          <Flex gap="2" direction="column" style={{ maxWidth: "20rem" }}>
            <Text>
              Pressing &quot;tab&quot; will trap focus between this button and
              the popover trigger button.
            </Text>
            <Button>Example Button</Button>
          </Flex>
        </Popover.Content>
      </Popover>
    </Flex>
  );
}

export default App;
