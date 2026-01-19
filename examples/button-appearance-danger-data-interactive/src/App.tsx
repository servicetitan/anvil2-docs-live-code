import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8">
      <Button appearance="danger">Rest</Button>
      <Button appearance="danger" data-interactive="hover">
        Hover
      </Button>
      <Button appearance="danger" data-interactive="active">
        Active
      </Button>
      <Button appearance="danger" data-interactive="focus-visible">
        Focus Visible
      </Button>
      <Button appearance="danger" disabled>
        Disabled
      </Button>
    </Grid>
  );
}

export default App;
