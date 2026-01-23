import { Popover, Flex, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Flex justifyContent="center">
        <Grid
          placeItems="center"
          templateColumns="repeat(2, 1fr)"
          style={{
            paddingTop: "100px",
            gap: "150px",
          }}
        >
          <Popover open placement="top" disableShift disableFlip modal>
            <Popover.Button>Trigger</Popover.Button>
            <Popover.Content>Popover content </Popover.Content>
          </Popover>

          <Popover open placement="top" disableShift disableFlip modal>
            <Popover.Button>Trigger</Popover.Button>
            <Popover.Content>
              <Flex direction="column">
                <b>Headline content</b>
                Popover content
              </Flex>
            </Popover.Content>
          </Popover>
        </Grid>
      </Flex>
    </div>
  );
}

export default App;
