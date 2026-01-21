import {
  Popover,
  Flex,
  Text,
  Button,
  Card,
  Grid,
  Avatar,
} from "@servicetitan/anvil2";
import BorderClear from "@servicetitan/anvil2/assets/icons/material/round/border_clear.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        paddingBlockStart: "21rem",
        paddingInline: "7rem",
      }}
    >
      <Popover open placement="top" disableShift disableFlip>
        <Popover.Button>Recent Activity</Popover.Button>
        <Popover.Content style={{ maxWidth: "360px" }}>
          <Flex direction="column" gap="4">
            <Flex justifyContent="space-between">
              <Text variant="headline" size="small" el="h4">
                Activity
              </Text>
              <Flex gap="1">
                <Button
                  appearance="ghost"
                  size="small"
                  icon={BorderClear}
                  onClick={console.log}
                />
                <Button
                  appearance="ghost"
                  size="small"
                  icon={BorderClear}
                  onClick={console.log}
                />
                <Button
                  appearance="ghost"
                  size="small"
                  icon={BorderClear}
                  onClick={console.log}
                />
              </Flex>
            </Flex>

            <Flex direction="column" gap="1">
              <Card padding="small">
                <Grid templateColumns="1fr auto" gap="4">
                  <Avatar name="Dog01" size="large" />
                  <Flex direction="column" gap="1">
                    <Text size="small">
                      <b>John mentioned you</b>{" "}
                      <Text inline subdued size="small">
                        9:55am
                      </Text>
                    </Text>
                    <Text subdued size="small">
                      If this is lorem ipsum, then what is not lorem ipsum?
                      Consider this.
                    </Text>
                  </Flex>
                </Grid>
              </Card>
              <Card padding="small">
                <Grid templateColumns="1fr auto" gap="4">
                  <Avatar name="Dog01" size="large" />
                  <Flex direction="column" gap="1">
                    <Text size="small">
                      <b>Jane Doe updated a job appointment</b>{" "}
                      <Text inline subdued size="small">
                        Yesterday
                      </Text>
                    </Text>
                    <Text subdued size="small">
                      Only [x jobs] remaining to work.
                    </Text>
                  </Flex>
                </Grid>
              </Card>
              <Card padding="small">
                <Grid templateColumns="1fr auto" gap="4">
                  <Avatar name="Dog01" size="large" />
                  <Flex direction="column" gap="1">
                    <Text size="small">
                      <b>ST Calendar</b>{" "}
                      <Text inline subdued size="small">
                        3 months ago
                      </Text>
                    </Text>
                    <Text subdued size="small">
                      5 minutes until this event: Hello.
                    </Text>
                  </Flex>
                </Grid>
              </Card>
            </Flex>
          </Flex>
        </Popover.Content>
      </Popover>
    </div>
  );
}

export default App;
