import { Button, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="8" placeItems="center">
      <Button>Text Does Not Have A Max Width</Button>
      <Button>
        Text Will Wrap To A Second Line In Code If It Runs Out Of Space
      </Button>
    </Grid>
  );
}

export default App;
