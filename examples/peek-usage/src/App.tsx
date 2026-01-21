import { Popover, Flex, Text, Avatar } from "@servicetitan/anvil2";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        paddingBlockStart: "6rem",
        paddingInline: "4rem",
      }}
    >
      <Popover open placement="top" disableShift disableFlip>
        <Popover.Button>Jane Doe</Popover.Button>
        <Popover.Content>
          <Flex gap="3" justifyContent="center">
            <Avatar name="Dog01" size="large" />
            <Flex direction="column">
              <Text>
                <b>Jane Doe</b>
              </Text>
              <Text subdued size="small">
                Customer since 2018
              </Text>
            </Flex>
          </Flex>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
