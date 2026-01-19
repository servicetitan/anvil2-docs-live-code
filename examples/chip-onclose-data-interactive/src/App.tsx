import { Chip, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(3, max-content)" gap="8">
      <Chip
        label="Rest"
        onClose={() => alert("chip close")}
        onClick={() => alert("chip click")}
      />
      <Chip
        label="Hover"
        onClose={() => alert("chip close")}
        onClick={() => alert("chip click")}
        data-interactive="close-hover"
      />
      <Chip
        label="Focus Visible"
        onClose={() => alert("chip close")}
        onClick={() => alert("chip click")}
        data-interactive="focus-visible"
      />
    </Grid>
  );
}

export default App;
