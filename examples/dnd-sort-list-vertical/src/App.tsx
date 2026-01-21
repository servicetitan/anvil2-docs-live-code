import { useState } from "react";
import { DndSort, type DndSortChangeEvent } from "@servicetitan/anvil2";

type Items = {
  [key: string | number]: { name: string; type: string };
};

type Order = (string | number)[];

const teams: Items = {
  A: { name: "Card of List #1", type: "item" },
  B: { name: "Card of List #2", type: "item" },
  C: { name: "Card of List #3", type: "item" },
  D: { name: "Card of List #4", type: "item" },
  E: { name: "Card of List #5", type: "item" },
};

function App() {
  const [_mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();
  const [order, setOrder] = useState<Order>(["A", "B", "C", "D", "E"]);

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
        gap={3}
      >
        {order.map((itemId) => (
          <DndSort.Card
            key={itemId}
            label={teams[itemId].name}
            id={itemId}
            alignItems="center"
            padding="small"
          >
            {teams[itemId].name}
          </DndSort.Card>
        ))}
      </DndSort.Zone>
    </DndSort>
  );
}

export default App;
