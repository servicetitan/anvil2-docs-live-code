import { SegmentedControl, Flex, Grid, Card } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("grid");

  return (
    <Flex gap="3" direction="column">
      <SegmentedControl
        fill
        defaultSelected="grid"
        aria-label="Transportations"
        onChange={(value) => setMode(value)}
      >
        <SegmentedControl.Segment value="grid">Grid</SegmentedControl.Segment>
        <SegmentedControl.Segment value="List">List</SegmentedControl.Segment>
      </SegmentedControl>
      <Grid
        gap="3"
        templateColumns={mode === "grid" ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
      >
        {["Bicycle", "Bus", "Car", "Train", "Motorcycle", "Subway"].map(
          (name, i) => (
            <Card key={i}>{name}</Card>
          ),
        )}
      </Grid>
    </Flex>
  );
}

export default App;
