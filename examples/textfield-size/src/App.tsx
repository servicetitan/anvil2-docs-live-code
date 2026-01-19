import { TextField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <TextField label="Small Textfield" size="small" />
      <TextField label="Medium Textfield" />
      <TextField label="Large Textfield" size="large" />
    </Grid>
  );
}

export default App;
