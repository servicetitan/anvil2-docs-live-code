import { TimeField, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <TimeField
        label="Field with 24 hour format"
        format={24}
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />

      <TimeField
        label="Field with 24 hour format/min/max"
        format={24}
        min="09:00"
        max="17:00"
        description="Please enter a time between 09:00 AM and 17:00 PM"
        onChange={(change) => {
          console.log("Time changed:", change.time);
        }}
      />
    </Grid>
  );
}

export default App;
