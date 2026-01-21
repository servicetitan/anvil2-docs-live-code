import { Popover, Text, Flex, Icon } from "@servicetitan/anvil2";
import BorderClear from "@servicetitan/anvil2/assets/icons/material/round/border_clear.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        paddingBlockStart: "18rem",
        paddingInline: "7rem",
      }}
    >
      <Popover open placement="top" disableShift disableFlip>
        <Popover.Button>Trigger</Popover.Button>
        <Popover.Content style={{ maxWidth: "300px", paddingTop: "8px" }}>
          <Text variant="headline" size="large" el="h3">
            Header Text
          </Text>
          <Flex
            style={{ minHeight: "200px" }}
            placeItems="center"
            direction="column"
            justifyContent="center"
            gap="4"
          >
            <Icon svg={BorderClear} size="large" />
            <Text subdued size="small" style={{ textAlign: "center" }}>
              This is a potential empty state message, if you needed one.
            </Text>
          </Flex>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
