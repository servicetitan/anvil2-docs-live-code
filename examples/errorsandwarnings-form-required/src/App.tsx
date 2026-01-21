import { TextField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <TextField label="Full Name" required />
      <TextField label="Email Address" required />
      <TextField label="Street Address" />
    </Grid>
  );
}

export default App;
