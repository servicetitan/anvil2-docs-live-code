import { SelectCard, Grid, Text, Chip } from "@servicetitan/anvil2";

function App() {
  return (
    <SelectCard
      id="1"
      onChange={() => {
        console.log("clicked");
      }}
      disabled
    >
      <Grid templateColumns="repeat(2, 1fr)" gap="4">
        <Text>Cooling Tune Up</Text>

        <Text style={{ textAlign: "right" }}>#4567-1</Text>

        <Text>10:30 AM</Text>

        <Chip label="Customer name" />
      </Grid>
    </SelectCard>
  );
}

export default App;
