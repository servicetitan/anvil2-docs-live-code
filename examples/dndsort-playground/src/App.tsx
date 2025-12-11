import {
  DndSort,
  Flex,
  Grid,
  Text,
  type DndSortChangeEvent,
} from "@servicetitan/anvil2";
import { useState } from "react";

type Items = {
  [key: string]: { id: string; label: string };
};

type Buckets = {
  [key: string]: (string | number)[];
};

function App() {
  const [mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();
  const [buckets, setBuckets] = useState<Buckets>({
    "zone-1": [],
    "zone-2": [],
    other: ["A", "B", "C", "D", "E"],
  });
  const foodItems: Items = {
    A: { id: "A", label: "Apple 🍎" },
    B: { id: "B", label: "Banana 🍌" },
    C: { id: "C", label: "Carrot 🥕" },
    D: { id: "D", label: "Doughnut 🍩" },
    E: { id: "E", label: "Eggplant 🍆" },
  };

  const someStylesOfYourChoosing = {
    border: "1px solid var(--border-color-subdued)",
    borderRadius: "var(--size-2)",
    flexDirection: "column" as const,
  };

  const handleDrop = (event: DndSortChangeEvent) => {
    setMostRecentEvent(event);
    setBuckets((prevBuckets) => {
      // If the item wasn't dropped in a zone, do nothing
      if (!event.zoneId) return prevBuckets;

      // If the item was dropped in an invalid zone, do nothing
      if (!event.valid) return prevBuckets;

      // Create a copy of the current buckets
      const newBuckets = { ...prevBuckets };

      // Reorder or add the item to the target bucket
      if (event.zoneSort !== null) {
        newBuckets[event.zoneId] = event.zoneSort;
      }

      if (event.previousZoneId && event.previousZoneSort !== null) {
        // Reorder or remove the item from the previous bucket
        newBuckets[event.previousZoneId] = event.previousZoneSort;
      } else {
        // Remove the item from the "other" bucket
        newBuckets.other = newBuckets.other.filter(
          (id) => id !== event.draggableId,
        );
      }

      return newBuckets;
    });
  };

  return (
    <DndSort onDrop={handleDrop}>
      <Flex direction="column" gap="8" style={{ width: "100%" }}>
        {buckets.other.length > 0 && (
          <Grid templateColumns="repeat(5, 1fr)" gap="4">
            {buckets.other.map((itemId) => (
              <DndSort.Card
                key={itemId}
                label={foodItems[itemId].label}
                id={itemId}
              >
                <Text>{foodItems[itemId].label}</Text>
              </DndSort.Card>
            ))}
          </Grid>
        )}

        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          <DndSort.Zone
            sortable
            id="zone-1"
            orientation="vertical"
            sortedIds={buckets["zone-1"]}
            label="Zone 1"
            style={someStylesOfYourChoosing}
            defaultDropPosition="end"
          >
            <Text>Zone 1</Text>
            {buckets["zone-1"].map((itemId) => (
              <DndSort.Card
                key={itemId}
                label={foodItems[itemId].label}
                id={itemId}
              >
                <Text>{foodItems[itemId].label}</Text>
              </DndSort.Card>
            ))}
          </DndSort.Zone>

          <DndSort.Zone
            sortable
            id="zone-2"
            label="Zone 2"
            orientation="vertical"
            sortedIds={buckets["zone-2"]}
            style={someStylesOfYourChoosing}
            defaultDropPosition="end"
          >
            <Text>Zone 2</Text>
            {buckets["zone-2"].map((itemId) => (
              <DndSort.Card
                key={itemId}
                label={foodItems[itemId].label}
                id={itemId}
              >
                <Text>{foodItems[itemId].label}</Text>
              </DndSort.Card>
            ))}
          </DndSort.Zone>
        </Grid>
        <div>
          <Text>Drop event:</Text>
          <pre>{JSON.stringify(mostRecentEvent, null, 2)}</pre>
        </div>
      </Flex>
    </DndSort>
  );
}

export default App;
