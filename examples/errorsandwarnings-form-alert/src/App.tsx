import { Alert, Grid, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <Alert
        title="Please fix the following elements and submit again"
        status="danger"
      >
        <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
          <li>Enter a last name</li>
          <li>Enter a valid email address</li>
          <li>Enter a valid area code</li>
        </ul>
      </Alert>
      <Grid gap="6" templateColumns="1fr 1fr">
        <TextField label="First Name" defaultValue="Jane" />
        <TextField label="Last Name" error="Enter a last name" />
      </Grid>
      <TextField
        label="Email Address"
        defaultValue="emailservicetitan.com"
        error="Enter a valid email address"
      />
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
