import { Grid, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <TextField
        label="Invoice note"
        hint="Keep it to one sentence"
        description="Visible to the customer"
      />
      <TextField
        label="Job name"
        warning="This name is already used on another job"
      />
      <TextField
        label="Email"
        hint="Use the address on the work order"
        error="Enter an email address"
      />
    </Grid>
  );
}

export default App;
