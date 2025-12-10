import { TimeField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <TimeField
        label="Field with min/max"
        min="09:00 AM"
        max="05:00 PM"
        description="Enter a time between 09:00 AM and 05:00 PM"
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />

      <TimeField
        label="Field with min/max/autoround"
        min="09:00 AM"
        max="05:00 PM"
        autoround
        description="Enter a time between 09:00 AM and 05:00 PM. Autorounding is enabled."
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />
    </Grid>
  );
}

export default App;
