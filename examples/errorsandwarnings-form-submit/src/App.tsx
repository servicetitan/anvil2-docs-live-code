import { TextField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <TextField
        label="Hours"
        defaultValue="3"
        error="Maximum hours must be greater than the minimum"
      />

      <TextField
        label="Price"
        defaultValue="-4.50"
        prefix="$"
        error="Value cannot be negative"
      />
    </Grid>
  );
}

export default App;
