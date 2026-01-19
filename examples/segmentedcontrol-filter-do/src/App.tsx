import { SegmentedControl, Flex, Grid, Card } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <Flex gap="3" direction="column">
      <SegmentedControl
        fill
        aria-label="Transportations"
        defaultSelected="all"
        onChange={(value) => setFilter(value)}
      >
        <SegmentedControl.Segment value="all">All</SegmentedControl.Segment>
        <SegmentedControl.Segment value="public">
          Public
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="personal">
          Personal
        </SegmentedControl.Segment>
      </SegmentedControl>
      <Grid gap="3" templateColumns="repeat(1, 1fr)">
        {filter === "personal"
          ? ["Bicycle", "Car", "Motorcycle"].map((name, i) => (
              <Card key={i}>{name}</Card>
            ))
          : filter === "public"
            ? ["Bus", "Train", "Subway"].map((name, i) => (
                <Card key={i}>{name}</Card>
              ))
            : ["Bicycle", "Bus", "Car", "Train", "Motorcycle", "Subway"].map(
                (name, i) => <Card key={i}>{name}</Card>,
              )}
      </Grid>
    </Flex>
  );
}

export default App;
