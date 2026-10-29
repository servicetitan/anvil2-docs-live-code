import { Grid, SelectFieldSync } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6" style={{ minWidth: "384px" }}>
      <SelectFieldSync
        label="Business Unit"
        placeholder="Select a Business Unit"
        options={[]}
        value={null}
        onSelectedOptionChange={() => {}}
      />

      <SelectFieldSync
        label="Technician"
        placeholder="Select a Technician"
        options={[]}
        value={null}
        onSelectedOptionChange={() => {}}
      />

      <SelectFieldSync
        label="View by"
        options={[]}
        value={null}
        onSelectedOptionChange={() => {}}
      />
    </Grid>
  );
}

export default App;
