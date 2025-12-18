import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Flex justifyContent="center" style={{ paddingTop: "4rem" }}>
        <Popover placement="top" defaultOpen>
          <Popover.Button>Toggle Popover</Popover.Button>
          <Popover.Content>Content</Popover.Content>
        </Popover>
      </Flex>
    </div>
  );
}

export default App;
