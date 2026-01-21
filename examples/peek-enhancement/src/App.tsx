import { Popover, Flex, Text, Chip, Avatar, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        paddingBlockStart: "16.5rem",
        paddingInline: "3.5rem",
      }}
    >
      <Popover open placement="top" disableShift disableFlip>
        <Popover.Button>Costco Wholesale Corporation</Popover.Button>
        <Popover.Content style={{ maxWidth: "360px" }}>
          <Flex direction="column" gap="4">
            <Flex gap="2">
              <Text variant="headline" size="small" el="h4">
                Customer
              </Text>
              <Chip label="Commercial" size="small" />
            </Flex>
            <Flex gap="3">
              <Avatar name="Dog01" size="large" />
              <Flex direction="column">
                <Text>
                  <b>Costco Wholesale Corporation</b>
                </Text>
                <Text subdued size="small">
                  123 Main Street Glendale CA 12345
                </Text>
              </Flex>
            </Flex>
            <Flex direction="column" gap="1">
              <Text variant="eyebrow" size="small">
                Tags
              </Text>
              <Flex wrap="wrap" gap="1">
                <Chip
                  label="FSD Installed 5 Yrs Ago"
                  size="small"
                  color="#5A8CEF"
                />
                <Chip label="HVAC" size="small" color="#6100FF" />
                <Chip label="Quickbase" size="small" color="#769A8A" />
                <Chip
                  label="Commercial SA Member"
                  size="small"
                  color="#FF9900"
                />
              </Flex>
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)">
              <Flex direction="column">
                <Text variant="eyebrow" size="small">
                  Balance due
                </Text>
                <Text size="small">$1,503.00</Text>
              </Flex>
              <Flex direction="column">
                <Text variant="eyebrow" size="small">
                  Credit
                </Text>
                <Text size="small">$0.00</Text>
              </Flex>
            </Grid>
          </Flex>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
