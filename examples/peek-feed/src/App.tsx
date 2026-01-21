import { Popover, Flex, Text, Button, Card, Grid } from "@servicetitan/anvil2";
import BorderClear from "@servicetitan/anvil2/assets/icons/material/round/border_clear.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        paddingBlockStart: "27.5rem",
        paddingInline: "8.5rem",
      }}
    >
      <Popover open placement="top" disableShift disableFlip>
        <Popover.Button>Trigger</Popover.Button>
        <Popover.Content style={{ maxWidth: "360px", paddingTop: "8px" }}>
          <Flex direction="column" gap="2">
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
            <Text variant="eyebrow" size="small">
              Subheader
            </Text>

            <Flex direction="column" gap="1">
              <Card>
                <Grid
                  templateColumns="2fr 1fr"
                  gap="4"
                  style={{ width: "100%" }}
                >
                  <Text size="small">
                    <b>Lorem ipsum dolar emit, nesciunt quia dolor ab</b>
                  </Text>
                  <Grid.Item justifySelf="safe end">
                    <Button size="small">Button</Button>
                  </Grid.Item>
                </Grid>
              </Card>
              <Card>
                <Grid
                  templateColumns="2fr 1fr"
                  gap="4"
                  style={{ width: "100%" }}
                >
                  <Text size="small">
                    <b>Lorem ipsum dolar emit, nesciunt quia dolor ab</b>
                  </Text>
                  <Grid.Item justifySelf="safe end">
                    <Button size="small">Button</Button>
                  </Grid.Item>
                </Grid>
              </Card>
              <Card>
                <Grid
                  templateColumns="2fr 1fr"
                  gap="4"
                  style={{ width: "100%" }}
                >
                  <Text size="small">
                    <b>One liner</b>
                  </Text>
                  <Grid.Item justifySelf="safe end">
                    <Button size="small">Button</Button>
                  </Grid.Item>
                </Grid>
              </Card>
              <Card>
                <Grid
                  templateColumns="2fr 1fr"
                  gap="4"
                  style={{ width: "100%" }}
                >
                  <Text size="small">
                    <b>
                      This is will be a third liner just to see what happens
                      here, lorem ipsum emit.
                    </b>
                  </Text>
                  <Grid.Item justifySelf="safe end">
                    <Button size="small">Button</Button>
                  </Grid.Item>
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
