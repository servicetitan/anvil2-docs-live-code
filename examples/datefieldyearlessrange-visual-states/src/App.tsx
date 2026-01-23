import { DateFieldYearlessRange, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <DateFieldYearlessRange
        label="Seasonal Period"
        defaultValue={{
          startDate: { month: 6, day: 1 },
          endDate: { month: 8, day: 31 },
        }}
        required
      />
      <DateFieldYearlessRange
        label="Seasonal Period"
        defaultValue={{
          startDate: { month: 6, day: 1 },
          endDate: { month: 8, day: 31 },
        }}
        required
        disabled
      />
      <DateFieldYearlessRange
        label="Seasonal Period"
        defaultValue={{
          startDate: { month: 8, day: 31 },
          endDate: { month: 6, day: 1 },
        }}
        required
        error="End date must be after start date"
      />
    </Grid>
  );
}

export default App;
