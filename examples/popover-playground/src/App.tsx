import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minHeight: "284px" }}>
      <Flex justifyContent="center" style={{ paddingTop: "4rem" }}>
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
