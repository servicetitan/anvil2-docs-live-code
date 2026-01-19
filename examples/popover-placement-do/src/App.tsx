import { Popover, Flex, Grid, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <Flex justifyContent="center" style={{ margin: "0 3rem" }}>
        <Grid
          columnGap="2"
          templateColumns="repeat(3, max-content)"
          placeContent="center"
          style={{
            paddingBottom: 100,
            rowGap: "150px",
          }}
        >
          <Popover placement="bottom-start" open disableFocusLock>
            <Popover.Button data-interactive="active">Button</Popover.Button>
            <Popover.Content
              style={{ display: "flex", flexDirection: "column" }}
            >
              <b>Bottom start position</b>
              Popover content
            </Popover.Content>
          </Popover>
          <Button>Button</Button>
          <Button>Button</Button>

          <Button>Button</Button>
          <Button>Button</Button>
          <Popover placement="bottom-end" open disableFocusLock>
            <Popover.Button data-interactive="active">Button</Popover.Button>
            <Popover.Content
              style={{ display: "flex", flexDirection: "column" }}
            >
              <b>Bottom end position</b>
              Popover content
            </Popover.Content>
          </Popover>
        </Grid>
      </Flex>
    </div>
  );
}

export default App;
