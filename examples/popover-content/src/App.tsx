import { Popover, Flex, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Flex justifyContent="center" style={{ margin: "0 3rem" }}>
        <Grid
          placeItems="center"
          templateColumns="repeat(2, 1fr)"
          style={{
            paddingTop: "100px",
          }}
        >
          <Popover
            open
            placement="top"
            disableShift
            disableFlip
            disableFocusLock
          >
            <Popover.Button>Trigger</Popover.Button>
            <Popover.Content>Popover content </Popover.Content>
          </Popover>

          <Popover
            open
            placement="top"
            disableShift
            disableFlip
            disableFocusLock
          >
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
