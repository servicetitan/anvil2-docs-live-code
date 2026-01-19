import { Chip, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="2" alignItems="center">
      <Chip label="Medium Chip" size="medium" />
      <Chip label="Small Chip" size="small" />
    </Grid>
  );
}

export default App;
