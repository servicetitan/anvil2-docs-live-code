import {
  DndSort,
  Flex,
  Grid,
  Text,
  type DndSortChangeEvent,
} from "@servicetitan/anvil2";
import { useState } from "react";

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
              <DndSort.Card key={itemId} label={`Item ${itemId}`} id={itemId}>
                Item {itemId}
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
              <DndSort.Card key={itemId} label={`Item ${itemId}`} id={itemId}>
                Item {itemId}
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
              <DndSort.Card key={itemId} label={`Item ${itemId}`} id={itemId}>
                Item {itemId}
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
