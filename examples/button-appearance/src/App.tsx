import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8">
      <Button appearance="primary">Primary</Button>
      <Button>Secondary</Button>
      <Button appearance="ghost">Ghost</Button>
      <Button appearance="danger">Danger</Button>
      <Button appearance="danger-secondary">Danger Secondary</Button>
    </Grid>
  );
}

export default App;
