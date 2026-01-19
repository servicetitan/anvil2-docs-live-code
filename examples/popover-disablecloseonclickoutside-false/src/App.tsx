import { Popover, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid
      placeItems="center"
      style={{
        paddingTop: "70px",
      }}
    >
      <Popover placement="top">
        <Popover.Button>Close on click outside</Popover.Button>
        <Popover.Content>Popover content </Popover.Content>
      </Popover>
    </Grid>
  );
}

export default App;
