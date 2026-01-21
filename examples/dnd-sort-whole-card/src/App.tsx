import { useState } from "react";
import { DndSort, type DndSortChangeEvent } from "@servicetitan/anvil2";

type Items = {
  [key: string | number]: { name: string; type: string };
};

const teams: Items = {
  A: { name: "Whole Card Target #1", type: "item" },
  B: { name: "Whole Card Target #2", type: "item" },
};

function App() {
  const [_mostRecentEvent, setMostRecentEvent] = useState<DndSortChangeEvent>();
  const [order, setOrder] = useState<(string | number)[]>(["A", "B"]);

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
        {order.map((itemId) => (
          <DndSort.Card
            key={itemId}
            label={teams[itemId].name}
            id={itemId}
            alignItems="center"
          >
            {teams[itemId].name}
          </DndSort.Card>
        ))}
      </DndSort.Zone>
    </DndSort>
  );
}

export default App;
