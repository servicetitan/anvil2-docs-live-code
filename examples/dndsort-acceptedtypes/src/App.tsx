import {
  DndSort,
  Flex,
  Grid,
  Text,
  type DndSortChangeEvent,
} from "@servicetitan/anvil2";
import { useState } from "react";

type Items = {
  [key: string | number]: { name: string; type: string };
};

type Buckets = {
  [key: string]: (string | number)[];
};

function App() {
  const [mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();
  const [buckets, setBuckets] = useState<Buckets>({
    start: ["A", "B", "C", 1, 2, 3],
    "zone-1": [],
    "zone-2": [],
  });

  const handleDrop = (event: DndSortChangeEvent) => {
    setMostRecentEvent(event);
    setBuckets((prevBuckets) => {
      // If the item wasn't dropped in a zone, do nothing
      if (!event.zoneId) return prevBuckets;

      // If the item was dropped in an invalid zone, do nothing
      if (!event.valid) return prevBuckets;

      // If the item was dropped in the zone it was already in, do nothing
      if (event.zoneId === event.previousZoneId) return prevBuckets;

      // Create a copy of the current buckets
      const newBuckets = { ...prevBuckets };

      // Remove the item from its previous bucket
      const prevKey = event.previousZoneId || "start";
      newBuckets[prevKey] = newBuckets[prevKey].filter(
        (id) => id !== event.draggableId,
      );

      // Add the item to the target bucket
      newBuckets[event.zoneId] = newBuckets[event.zoneId].concat(
        event.draggableId,
      );

      return newBuckets;
    });
  };

  const options: Items = {
    A: { name: "🍓 Strawberry", type: "fruits" },
    B: { name: "🍉 Watermelon", type: "fruits" },
    C: { name: "🥭 Mango", type: "fruits" },
    1: { name: "🥦 Broccoli", type: "vegetables" },
    2: { name: "🥕 Carrot", type: "vegetables" },
    3: { name: "🌽 Corn", type: "vegetables" },
  };

  return (
    <DndSort onDrop={handleDrop}>
      <Flex direction="column" gap="8" style={{ width: "100%" }}>
        <Grid templateColumns={"repeat(3, 1fr)"} gap="8">
          <DndSort.Zone
            id="start"
            acceptedTypes={["vegetables", "fruits"]}
            label="Produce basket"
            orientation="vertical"
          >
            {buckets["start"].map((itemId) => (
              <DndSort.Card
                key={itemId}
                label={options[itemId].name}
                id={itemId}
                type={options[itemId].type}
              >
                {options[itemId].name}
              </DndSort.Card>
            ))}
          </DndSort.Zone>
          <DndSort.Zone
            id="zone-1"
            acceptedTypes={["fruits"]}
            label="Fruit basket"
            orientation="vertical"
          >
            <Text>This zone only accepts fruits.</Text>
            {buckets["zone-1"].map((itemId) => (
              <DndSort.Card
                key={itemId}
                label={options[itemId].name}
                id={itemId}
                type={options[itemId].type}
              >
                {options[itemId].name}
              </DndSort.Card>
            ))}
          </DndSort.Zone>

          <DndSort.Zone
            id="zone-2"
            acceptedTypes={["vegetables"]}
            label="Vegetable basket"
            orientation="vertical"
          >
            <Text>This zone only accepts vegetables</Text>
            {buckets["zone-2"].map((itemId) => (
              <DndSort.Card
                key={itemId}
                label={options[itemId].name}
                id={itemId}
                type={options[itemId].type}
              >
                {options[itemId].name}
              </DndSort.Card>
            ))}
          </DndSort.Zone>
        </Grid>
        <details>
          <summary>
            <Text inline>Click to see the drop event</Text>
          </summary>
          <pre>{JSON.stringify(mostRecentEvent, null, 2)}</pre>
        </details>
      </Flex>
    </DndSort>
  );
}

export default App;
