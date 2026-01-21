import { useState } from "react";
import {
  DndSort,
  Flex,
  Grid,
  Card,
  Text,
  type DndSortChangeEvent,
} from "@servicetitan/anvil2";

type Buckets = {
  [key: string]: (string | number)[];
};

function App() {
  const [_mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();
  const [buckets, setBuckets] = useState<Buckets>({
    "zone-1": ["A", "B", "C"],
    "zone-2": ["D", "E"],
    "zone-3": ["F"],
  });

  const someStylesOfYourChoosing = {
    flexDirection: "column",
    width: "100%",
    borderRadius: "12px",
  } as const;

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
      const prevKey = event.previousZoneId;
      if (prevKey) {
        newBuckets[prevKey] = newBuckets[prevKey].filter(
          (id) => id !== event.draggableId,
        );
      }

      // Add the item to the target bucket
      newBuckets[event.zoneId] = newBuckets[event.zoneId].concat(
        event.draggableId,
      );

      return newBuckets;
    });
  };

  return (
    <DndSort onDrop={handleDrop}>
      <Flex direction="column" gap="8" style={{ width: "100%" }}>
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
          <Card padding="0" background="strong">
            <DndSort.Zone
              id="zone-1"
              label="Zone 1"
              style={someStylesOfYourChoosing}
              gap={3}
            >
              <Text>
                <b>Todo</b>
              </Text>
              {buckets["zone-1"].map((itemId) => (
                <DndSort.Card
                  key={itemId}
                  label={`Item ${itemId}`}
                  id={itemId}
                  alignItems="center"
                >
                  Item {itemId}
                </DndSort.Card>
              ))}
            </DndSort.Zone>
          </Card>
          <Card padding="0" background="strong">
            <DndSort.Zone
              id="zone-2"
              label="Zone 2"
              style={someStylesOfYourChoosing}
              gap={3}
            >
              <Text>
                <b>In Progress</b>
              </Text>
              {buckets["zone-2"].map((itemId) => (
                <DndSort.Card
                  key={itemId}
                  label={`Item ${itemId}`}
                  id={itemId}
                  alignItems="center"
                >
                  Item {itemId}
                </DndSort.Card>
              ))}
            </DndSort.Zone>
          </Card>
          <Card padding="0" background="strong">
            <DndSort.Zone
              id="zone-3"
              label="Zone 3"
              style={someStylesOfYourChoosing}
              gap={3}
            >
              <Text>
                <b>Done</b>
              </Text>
              {buckets["zone-3"].map((itemId) => (
                <DndSort.Card
                  key={itemId}
                  label={`Item ${itemId}`}
                  id={itemId}
                  alignItems="center"
                >
                  Item {itemId}
                </DndSort.Card>
              ))}
            </DndSort.Zone>
          </Card>
        </Grid>
      </Flex>
    </DndSort>
  );
}

export default App;
