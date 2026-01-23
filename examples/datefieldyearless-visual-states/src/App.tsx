import { DateFieldYearless, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <DateFieldYearless
        label="Birthday"
        defaultValue={{ month: 7, day: 15 }}
        required
      />
      <DateFieldYearless
        label="Birthday"
        defaultValue={{ month: 7, day: 15 }}
        required
        disabled
      />
      <DateFieldYearless
        label="Birthday"
        defaultValue={{ month: 13, day: 32 }}
        required
        error="Please enter a valid date"
      />
    </Grid>
  );
}

export default App;
