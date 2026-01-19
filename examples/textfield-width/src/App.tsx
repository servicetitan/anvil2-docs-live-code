import { TextField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <div style={{ width: "80px" }}>
        <TextField label="Label" />
      </div>
      <div style={{ width: "200px" }}>
        <TextField label="Label" />
      </div>
      <TextField label="Label" />
    </Grid>
  );
}

export default App;
