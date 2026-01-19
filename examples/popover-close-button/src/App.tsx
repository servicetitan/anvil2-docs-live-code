import { Popover, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid
      placeItems="center"
      style={{
        paddingTop: "100px",
      }}
    >
      <Popover placement="top">
        <Popover.Button>Close with apply button</Popover.Button>
        <Popover.Content
          style={{ display: "flex", gap: 20, flexDirection: "column" }}
        >
          Popover content <Popover.Close>Apply</Popover.Close>
        </Popover.Content>
      </Popover>
    </Grid>
  );
}

export default App;
