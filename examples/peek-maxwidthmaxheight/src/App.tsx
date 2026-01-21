import { Popover, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        paddingBlockStart: "32.5rem",
        paddingInline: "8rem",
      }}
    >
      <Popover open placement="top" disableShift disableFlip>
        <Popover.Button>Trigger</Popover.Button>
        <Popover.Content>
          <Flex
            style={{
              backgroundColor: "var(--color-purple-100)",
              borderColor: "var(--color-purple-400)",
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
            <Text
              size="small"
              style={{
                textAlign: "center",
                color: "var(--color-purple-400)",
              }}
            >
              Inner Popover content suggested max dimensions (16px padding):
            </Text>
            <Text
              size="small"
              style={{
                textAlign: "center",
                color: "var(--color-purple-400)",
              }}
            >
              328px width
            </Text>
            <Text
              size="small"
              style={{
                textAlign: "center",
                color: "var(--color-purple-400)",
              }}
            >
              508px height
            </Text>
          </Flex>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
