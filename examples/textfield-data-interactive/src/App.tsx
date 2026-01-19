import { TextField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <TextField
        label="Label"
        description="Description text"
        defaultValue="Text in textfield"
        suffix="suffix"
        required
      />{" "}
      <TextField
        label="Label"
        description="Description text"
        defaultValue="Text in textfield"
        suffix="suffix"
        required
        disabled
      />
      <TextField
        label="Label"
        description="Description text"
        defaultValue="Text in textfield"
        suffix="suffix"
        required
        readOnly
      />
      <TextField
        label="Label"
        description="Description text"
        defaultValue="Text in textfield"
        suffix="suffix"
        required
        error="Error text"
      />
      <TextField
        label="Label"
        description="Description text"
        defaultValue="Text in textfield"
        suffix="suffix"
        required
        loading
      />
    </Grid>
  );
}

export default App;
