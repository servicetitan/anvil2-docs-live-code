import { Chip, Grid, SelectCard, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <SelectCard.Group
      legend="Choose an option"
      selectionMode="single"
      showSelectIndicator
    >
      <Grid gap="4" templateColumns="repeat(3, 1fr)">
        {[
          {
            id: "1",
            label: "Cooling Tune Up",
            cost: "$100",
            timeEstimate: "1 hour",
          },
          {
            id: "2",
            label: "Heating Tune Up",
            cost: "$150",
            timeEstimate: "2 hours",
          },
          {
            id: "3",
            label: "Air Duct Cleaning",
            cost: "$200",
            timeEstimate: "3 hours",
          },
        ].map((item) => (
          <SelectCard key={item.id} id={item.id}>
            <Grid templateColumns="repeat(2, 1fr)" gap="4">
              <Text variant="headline" size="small" el="h2">
                {item.label}
              </Text>
              <Chip label={item.cost} justifySelf="end" />
              <Text variant="body" size="small" subdued>
                ~{item.timeEstimate}
              </Text>
            </Grid>
          </SelectCard>
        ))}
      </Grid>
    </SelectCard.Group>
  );
}

export default App;
