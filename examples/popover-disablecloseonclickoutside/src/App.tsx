import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Flex
        justifyContent="center"
        style={{ paddingBlockStart: "4rem", paddingInline: "7rem" }}
      >
        <Popover disableCloseOnClickOutside placement="top" defaultOpen>
          <Popover.Button>Toggle Popover</Popover.Button>
          <Popover.Content>
            This popover will not close if you click outside.
          </Popover.Content>
        </Popover>
      </Flex>
    </div>
  );
}

export default App;
