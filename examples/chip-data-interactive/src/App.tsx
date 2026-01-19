import { Chip, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8">
      <Chip label="Rest" onClick={() => alert("chip click")} />
      <Chip
        label="Hover"
        onClick={() => alert("chip click")}
        data-interactive="hover"
      />
      <Chip
        label="Focus Visible"
        onClick={() => alert("chip click")}
        data-interactive="focus-visible"
      />
    </Grid>
  );
}

export default App;
