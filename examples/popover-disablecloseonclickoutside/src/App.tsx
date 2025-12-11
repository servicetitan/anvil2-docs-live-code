import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "284px" }}>
      <Flex justifyContent="center" style={{ paddingTop: "4rem" }}>
        <Popover disableCloseOnClickOutside placement="top">
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
