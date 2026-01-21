import { Combobox, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6" style={{ minWidth: "384px" }}>
      <Combobox items={[]}>
        <Combobox.SearchField
          label="Business Unit"
          placeholder="Select a Business Unit"
        />
      </Combobox>

      <Combobox items={[]}>
        <Combobox.SearchField
          label="Technician"
          placeholder="Select a Technician"
        />
      </Combobox>

      <Combobox items={[]}>
        <Combobox.SearchField label="View by" />
      </Combobox>
    </Grid>
  );
}

export default App;
