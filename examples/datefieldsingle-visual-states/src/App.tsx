import { DateFieldSingle, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <DateFieldSingle
        label="Appointment Date"
        defaultValue="2025-07-15"
        required
      />
      <DateFieldSingle
        label="Appointment Date"
        defaultValue="2025-07-15"
        required
        disabled
      />
      <DateFieldSingle
        label="Appointment Date"
        defaultValue="2025-07-15"
        required
        error="This date is unavailable"
      />
    </Grid>
  );
}

export default App;
