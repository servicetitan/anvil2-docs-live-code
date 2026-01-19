import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8">
      <Button appearance="primary">Rest</Button>
      <Button appearance="primary" data-interactive="hover">
        Hover
      </Button>
      <Button appearance="primary" data-interactive="active">
        Active
      </Button>
      <Button appearance="primary" data-interactive="focus-visible">
        Focus Visible
      </Button>
      <Button appearance="primary" disabled>
        Disabled
      </Button>
    </Grid>
  );
}

export default App;
