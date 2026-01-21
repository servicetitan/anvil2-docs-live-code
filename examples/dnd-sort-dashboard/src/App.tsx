import { useState } from "react";
import { DndSort, Grid, type DndSortChangeEvent } from "@servicetitan/anvil2";

type Buckets = {
  [key: string]: (string | number)[];
};

function App() {
  const [_mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();
  const [buckets, setBuckets] = useState<Buckets>({
    "zone-1": ["A"],
    "zone-2": ["B"],
    "zone-3": ["C"],
    "zone-4": ["D"],
  });

  const someStylesOfYourChoosing = {
    flexDirection: "column",
    width: "100%",
  } as const;

  const handleDrop = (event: DndSortChangeEvent) => {
    console.info(event);
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

      const targetBucketItems = newBuckets[event.zoneId];
      const draggableId = event.draggableId;
      const previousZoneId = event.previousZoneId;

      // Check if there's an item in the target zone and it's not the item being dragged
      if (
        targetBucketItems &&
        targetBucketItems.length > 0 &&
        targetBucketItems[0] !== draggableId
      ) {
        const itemToSwapOut = targetBucketItems[0]; // Assuming only one item per zone for simplicity or taking the first one
        // Remove the item from its previous bucket (the draggableId)
        if (previousZoneId) {
          newBuckets[previousZoneId] = newBuckets[previousZoneId].filter(
            (id) => id !== draggableId,
          );
        }
        // Add the item that was in the target bucket to the previous bucket
        if (previousZoneId) {
          // Only if there was a previous zone
          newBuckets[previousZoneId] =
            newBuckets[previousZoneId].concat(itemToSwapOut);
        }

        // Replace the item in the target bucket with the draggableId
        newBuckets[event.zoneId] = [draggableId]; // Assuming only one item per zone
      } else {
        // --- Original logic if no swap or if target bucket is empty ---

        // Remove the item from its previous bucket
        if (previousZoneId) {
          newBuckets[previousZoneId] = newBuckets[previousZoneId].filter(
            (id) => id !== draggableId,
          );
        }

        // Add the item to the target bucket
        newBuckets[event.zoneId] = newBuckets[event.zoneId].concat(draggableId);
      }

      return newBuckets;
    });
  };

  return (
    <DndSort onDrop={handleDrop}>
      <Grid templateColumns="repeat(2, 1fr)" gap="0">
        <DndSort.Zone
          id="zone-1"
          label="Zone 1"
          style={someStylesOfYourChoosing}
          gap={2}
        >
          {buckets["zone-1"].map((itemId) => (
            <DndSort.Card
              key={itemId}
              label={`Item ${itemId}`}
              id={itemId}
              style={{ height: "150px" }}
            >
              Dashboard item {itemId}
            </DndSort.Card>
          ))}
        </DndSort.Zone>

        <DndSort.Zone
          id="zone-2"
          label="Zone 2"
          style={someStylesOfYourChoosing}
          gap={2}
        >
          {buckets["zone-2"].map((itemId) => (
            <DndSort.Card
              key={itemId}
              label={`Item ${itemId}`}
              id={itemId}
              style={{ height: "150px" }}
            >
              Dashboard item {itemId}
            </DndSort.Card>
          ))}
        </DndSort.Zone>
        <DndSort.Zone
          id="zone-3"
          label="Zone 3"
          style={someStylesOfYourChoosing}
          gap={2}
        >
          {buckets["zone-3"].map((itemId) => (
            <DndSort.Card
              key={itemId}
              label={`Item ${itemId}`}
              id={itemId}
              style={{ height: "150px" }}
            >
              Dashboard item {itemId}
            </DndSort.Card>
          ))}
        </DndSort.Zone>

        <DndSort.Zone
          id="zone-4"
          label="Zone 4"
          style={someStylesOfYourChoosing}
          gap={2}
        >
          {buckets["zone-4"].map((itemId) => (
            <DndSort.Card
              key={itemId}
              label={`Item ${itemId}`}
              id={itemId}
              style={{ height: "150px" }}
            >
              Dashboard item {itemId}
            </DndSort.Card>
          ))}
        </DndSort.Zone>
      </Grid>
    </DndSort>
  );
}

export default App;
