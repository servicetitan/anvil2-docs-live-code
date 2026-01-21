import { Grid, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <Grid gap="6" templateColumns="1fr 1fr">
        <TextField label="First Name" />
        <TextField label="Last Name" />
      </Grid>
      <TextField label="Email Address" />
    </Grid>
  );
}

export default App;
