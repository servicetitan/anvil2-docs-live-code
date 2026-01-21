import { Alert, Grid, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <Alert title="Enter a valid area code" status="danger" />
      <Grid gap="6" templateColumns="1fr 1fr">
        <TextField label="First Name" defaultValue="Jane" />
        <TextField label="Last Name" />
      </Grid>
      <TextField label="Email Address" defaultValue="emailservicetitan.com" />
      <TextField
        label="Phone Number"
        defaultValue="555-5555"
        hint="(xxx) xxx–xxxx"
        error="Enter a valid area code"
      />
    </Grid>
  );
}

export default App;
