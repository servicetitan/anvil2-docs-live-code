import { useState } from "react";
import {
  DndSort,
  Card,
  Flex,
  Avatar,
  Text,
  Chip,
  type DndSortChangeEvent,
} from "@servicetitan/anvil2";

type Order = (string | number)[];

function App() {
  const [_mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();
  const [order, setOrder] = useState<Order>(["A", "B", "C"]);

  const handleDrop = (event: DndSortChangeEvent) => {
    setMostRecentEvent(event);
    setOrder((previousOrder) => event.zoneSort || previousOrder);
  };

  return (
    <DndSort onDrop={handleDrop}>
      <DndSort.Zone
        sortable
        id="zone-1"
        orientation="vertical"
        sortedIds={order}
        label="Zone 1"
        defaultDropPosition="end"
      >
        <DndSort.Card label="label" id="A" alignItems="center">
          No custom drag preview
        </DndSort.Card>
        <DndSort.Card
          label="label"
          id="B"
          alignItems="center"
          previewRenderer={() => <Card>Small drag preview</Card>}
        >
          Small drag preview
        </DndSort.Card>
        <DndSort.Card
          label="label"
          id="C"
          alignItems="center"
          previewRenderer={() => (
            <Card>
              <Flex alignItems="center" gap={3}>
                <Avatar image="/dog-01.png" name="Dog01" />
                <Flex direction="column">
                  <Flex alignItems="center" gap={3}>
                    <Text variant="headline" el="h4" size="small">
                      Maximilian the Magnificent
                    </Text>
                  </Flex>
                  <Text size="small" variant="body">
                    Director of Plumber Operations
                  </Text>
                </Flex>
                <Chip label="Admin" />
              </Flex>
            </Card>
          )}
        >
          Highly custom preview
        </DndSort.Card>
      </DndSort.Zone>
    </DndSort>
  );
}

export default App;
