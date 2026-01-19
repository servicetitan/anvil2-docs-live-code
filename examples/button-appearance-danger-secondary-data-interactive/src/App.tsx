import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8">
      <Button appearance="danger-secondary">Rest</Button>
      <Button appearance="danger-secondary" data-interactive="hover">
        Hover
      </Button>
      <Button appearance="danger-secondary" data-interactive="active">
        Active
      </Button>
      <Button appearance="danger-secondary" data-interactive="focus-visible">
        Focus Visible
      </Button>
      <Button appearance="danger-secondary" disabled>
        Disabled
      </Button>
    </Grid>
  );
}

export default App;
