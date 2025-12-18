import { Popover, Flex, Text } from "@servicetitan/anvil2";
import Close from "@servicetitan/anvil2/assets/icons/material/round/close.svg";

function App() {
  return (
    <div>
      <Flex justifyContent="center" style={{ paddingTop: "6rem" }}>
        <Popover placement="top" defaultOpen>
          <Popover.Button>Toggle Popover</Popover.Button>
          <Popover.Content>
            <Flex alignItems="center" gap="2">
              <Text>Press the close button:</Text>
              <Popover.Close icon={Close} />
            </Flex>
          </Popover.Content>
        </Popover>
      </Flex>
    </div>
  );
}

export default App;
