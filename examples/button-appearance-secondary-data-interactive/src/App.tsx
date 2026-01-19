import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8">
      <Button>Rest</Button>
      <Button data-interactive="hover">Hover</Button>
      <Button data-interactive="active">Active</Button>
      <Button data-interactive="focus-visible">Focus Visible</Button>
      <Button disabled>Disabled</Button>
    </Grid>
  );
}

export default App;
