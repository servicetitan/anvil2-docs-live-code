import { Grid, TextField, Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6" templateColumns="1fr 1fr">
      <TextField label="Your Name" />
      <TextField label="Email Address" />

      <Radio.Group legend="My function is">
        <Radio name="role" value="designer" label="Designer" />
        <Radio name="role" value="developer" label="Developer" />
        <Radio name="role" value="pm" label="Product Manager" />
      </Radio.Group>
      <Radio.Group legend="What support do you need?">
        <Radio name="support" value="software" label="Software" />
        <Radio name="support" value="hardware" label="Hardware" />
        <Radio name="support" value="report" label="Expense Report" />
        <Radio name="support" value="tools" label="Learning Tools" />
      </Radio.Group>
    </Grid>
  );
}

export default App;
