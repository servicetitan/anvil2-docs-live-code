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
            display: "grid",
            paddingTop: 120,
            rowGap: "150px",
          }}
        >
          <Button>Cancel</Button>
          <Popover placement="top-end" open disableFocusLock>
            <Popover.Button disabled appearance="primary">
              Submit
            </Popover.Button>
            <Popover.Content
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "14rem",
              }}
            >
              Popover content that is explaining why the Submit button is
              disabled.
            </Popover.Content>
          </Popover>
        </Grid>
      </Flex>
    </div>
  );
}

export default App;
