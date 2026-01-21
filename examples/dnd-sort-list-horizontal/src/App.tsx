import { useState } from "react";
import { DndSort, type DndSortChangeEvent } from "@servicetitan/anvil2";

type Items = {
  [key: string | number]: { name: string; type: string };
};

type Order = (string | number)[];

const teams: Items = {
  A: { name: "Card #1", type: "item" },
  B: { name: "Card #2", type: "item" },
  C: { name: "Card #3", type: "item" },
  D: { name: "Card #4", type: "item" },
};

function App() {
  const [_mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();
  const [order, setOrder] = useState<Order>(["A", "B", "C", "D"]);

  const handleDrop = (event: DndSortChangeEvent) => {
    setMostRecentEvent(event);
    setOrder((previousOrder) => event.zoneSort || previousOrder);
  };

  return (
    <DndSort onDrop={handleDrop}>
      <DndSort.Zone
        sortable
        id="zone-1"
        orientation="horizontal"
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
