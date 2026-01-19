import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8">
      <Button appearance="ghost">Rest</Button>
      <Button appearance="ghost" data-interactive="hover">
        Hover
      </Button>
      <Button appearance="ghost" data-interactive="active">
        Active
      </Button>
      <Button appearance="ghost" data-interactive="focus-visible">
        Focus Visible
      </Button>
      <Button appearance="ghost" disabled>
        Disabled
      </Button>
    </Grid>
  );
}

export default App;
