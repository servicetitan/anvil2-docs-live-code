import { DateFieldRange, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <DateFieldRange
        label="Reporting Period"
        defaultValue={{
          startDate: "2025-01-01",
          endDate: "2025-12-31",
        }}
        required
      />
      <DateFieldRange
        label="Reporting Period"
        defaultValue={{
          startDate: "2025-01-01",
          endDate: "2025-12-31",
        }}
        required
        disabled
      />
      <DateFieldRange
        label="Reporting Period"
        defaultValue={{
          startDate: "2025-12-31",
          endDate: "2025-01-01",
        }}
        required
        error="End date must be after start date"
      />
    </Grid>
  );
}

export default App;
