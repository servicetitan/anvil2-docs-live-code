import { Popover, Flex } from "@servicetitan/anvil2";

function App() {
  const placements = ["right-end", "right", "right-start"] as const;
  return (
    <Flex
      gap="2"
      direction="column"
      style={{
        padding: "0 16px",
      }}
    >
      {placements.map((placement) => {
        return (
          <Flex
            key={placement}
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "120px", minWidth: "240px" }}
          >
            <Popover
              disableShift
              disableFlip
              modal
              open
              placement={placement}
              key={placement}
            >
              <Popover.Button style={{ gridArea: placement }}>
                Button
              </Popover.Button>
              <Popover.Content>
                {placement} {"\n"} placement
              </Popover.Content>
            </Popover>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default App;
