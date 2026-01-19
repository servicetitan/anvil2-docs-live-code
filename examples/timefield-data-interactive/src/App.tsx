import { TimeField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <TimeField
        label="Label"
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />

      <TimeField
        label="Label"
        disabled
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />

      <TimeField
        label="Label"
        data-interactive="focus-visible"
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />

      <TimeField
        label="Label"
        description="An example description"
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />

      <TimeField
        label="Label"
        error="Time out of bounds"
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />
    </Grid>
  );
}

export default App;
