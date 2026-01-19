import { NumberField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <div style={{ width: "100px" }}>
        <NumberField label="Label" />
      </div>
      <div style={{ width: "200px" }}>
        <NumberField label="Label" />
      </div>
      <NumberField label="Label" />
    </Grid>
  );
}

export default App;
