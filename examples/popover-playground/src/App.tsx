import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Flex
        justifyContent="center"
        style={{ paddingBlockStart: "4rem", paddingInline: "7rem" }}
      >
        <Popover placement="top" defaultOpen>
          <Popover.Button>Toggle Popover</Popover.Button>
          <Popover.Content>
            The <code>Popover.Content</code> accepts a <code>ReactNode</code>.
          </Popover.Content>
        </Popover>
      </Flex>
    </div>
  );
}

export default App;
