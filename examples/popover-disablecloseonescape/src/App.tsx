import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center">
      <Popover disableCloseOnEscape placement="top" defaultOpen>
        <Popover.Button>Toggle Popover</Popover.Button>
        <Popover.Content>
          This popover will not close if you press the &quot;escape&quot; key.
        </Popover.Content>
      </Popover>
    </Flex>
  );
}

export default App;
