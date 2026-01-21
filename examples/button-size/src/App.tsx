import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8" alignItems="center">
      <Button size="large">Large</Button>
      <Button>Medium</Button>
      <Button size="small">Small</Button>
      <Button size="xsmall">Extra Small</Button>
    </Grid>
  );
}

export default App;
