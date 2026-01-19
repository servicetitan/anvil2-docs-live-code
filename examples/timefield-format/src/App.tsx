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
        label="Field with 24 hour format"
        format={24}
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />
    </Grid>
  );
}

export default App;
