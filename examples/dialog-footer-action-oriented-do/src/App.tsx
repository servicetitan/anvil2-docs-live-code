import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6" placeContent="center">
      <Button appearance="primary">Create Order</Button>
      <Button appearance="primary">Print Label</Button>
    </Grid>
  );
}

export default App;
