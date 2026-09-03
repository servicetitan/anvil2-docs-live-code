import { Popover, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center" placeItems="center">
      <Popover open placement="top" disableShift disableFlip>
        <Popover.Button>Trigger</Popover.Button>
        <Popover.Content>
          <Flex
            style={{
              borderColor: "var(--a2-border-color-subdued, #e6e6e6)",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "6px",
              maxWidth: "296px",
              minHeight: "476px",
              padding: "20px",
            }}
            direction="column"
            gap="4"
            alignSelf="stretch"
            justifyContent="center"
          >
            <Text subdued size="small" style={{ textAlign: "center" }}>
              Inner Popover content suggested max dimensions (16px padding):
            </Text>
            <Text subdued size="small" style={{ textAlign: "center" }}>
              328px width
            </Text>
            <Text subdued size="small" style={{ textAlign: "center" }}>
              508px height
            </Text>
          </Flex>
        </Popover.Content>
      </Popover>
    </Flex>
  );
}

export default App;
