import { Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid
      templateColumns="repeat(1, 1fr)"
      md={{ templateColumns: "repeat(2, 1fr)" }}
      gap="2"
    >
      <div style={{ backgroundColor: "red", height: 20 }} />
      <div style={{ backgroundColor: "green", height: 20 }} />
      <div style={{ backgroundColor: "blue", height: 20 }} />
      <div style={{ backgroundColor: "black", height: 20 }} />
    </Grid>
  );
}

export default App;
