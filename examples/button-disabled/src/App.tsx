import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(2, max-content)" gap="8" placeItems="center">
      <Button appearance="primary">Primary</Button>
      <Button appearance="primary" disabled>
        Primary
      </Button>

      <Button>Secondary</Button>
      <Button disabled>Secondary</Button>

      <Button appearance="ghost">Ghost</Button>
      <Button appearance="ghost" disabled>
        Ghost
      </Button>

      <Button appearance="danger">Danger</Button>
      <Button appearance="danger" disabled>
        Danger
      </Button>

      <Button appearance="danger-secondary">Danger Secondary</Button>
      <Button appearance="danger-secondary" disabled>
        Danger Secondary
      </Button>
    </Grid>
  );
}

export default App;
