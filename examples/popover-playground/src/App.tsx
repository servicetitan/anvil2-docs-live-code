import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center">
      <Popover placement="top" defaultOpen>
        <Popover.Button>Toggle Popover</Popover.Button>
        <Popover.Content>
          The <code>Popover.Content</code> accepts a <code>ReactNode</code>.
        </Popover.Content>
      </Popover>
    </Flex>
  );
}

export default App;
