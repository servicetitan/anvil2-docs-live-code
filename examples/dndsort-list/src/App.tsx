import {
  DndSort,
  Flex,
  Text,
  type DndSortChangeEvent,
} from "@servicetitan/anvil2";
import { useState } from "react";

type Items = {
  [key: string]: { name: string; type: string };
};

function App() {
  const [mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();

  const teams: Items = {
    A: { name: "Philadelphia Eagles", type: "nfl" },
    B: { name: "New York Giants", type: "nfl" },
    C: { name: "Dallas Cowboys", type: "nfl" },
    D: { name: "Washington Commanders", type: "nfl" },
    E: { name: "New York Jets", type: "nfl" },
    F: { name: "Miami Dolphins", type: "nfl" },
    G: { name: "Buffalo Bills", type: "nfl" },
  };

  const [order, setOrder] = useState<(string | number)[]>([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
  ]);

  const handleDrop = (event: DndSortChangeEvent) => {
    setMostRecentEvent(event);
    setOrder((previousOrder) => event.zoneSort || previousOrder);
  };

  return (
    <DndSort onDrop={handleDrop}>
      <Flex direction="column" gap="8" style={{ width: "100%" }}>
        <DndSort.Zone
          sortable
          id="zone-1"
          orientation="vertical"
          sortedIds={order}
          label="Zone 1"
          defaultDropPosition="end"
        >
          {order.map((itemId) => (
            <DndSort.Card key={itemId} label={teams[itemId].name} id={itemId}>
              {teams[itemId].name}
            </DndSort.Card>
          ))}
          <Text size="small">
            {`Sorry if your team wasn't listed, it's just an example :D`}
          </Text>
        </DndSort.Zone>
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
