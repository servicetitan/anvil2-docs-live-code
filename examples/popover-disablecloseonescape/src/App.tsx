import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Flex
        justifyContent="center"
        style={{ paddingBlockStart: "4rem", paddingInline: "9rem" }}
      >
        <Popover disableCloseOnEscape placement="top" defaultOpen>
          <Popover.Button>Toggle Popover</Popover.Button>
          <Popover.Content>
            This popover will not close if you press the &quot;escape&quot; key.
          </Popover.Content>
        </Popover>
      </Flex>
    </div>
  );
}

export default App;
