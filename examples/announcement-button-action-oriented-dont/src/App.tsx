import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(1, max-content)" gap="8" placeItems="center">
      <Button size="small">New invoice</Button>
      <Button size="small">Schedule</Button>
    </Grid>
  );
}

export default App;
