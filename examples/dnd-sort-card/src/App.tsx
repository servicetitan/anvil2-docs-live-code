import { useState } from "react";
import { DndSort } from "@servicetitan/anvil2";

type Items = {
  [key: string | number]: { name: string; type: string };
};

type Order = (string | number)[];

const teams: Items = {
  A: { name: "Card Content", type: "item" },
};

function App() {
  const [order, _setOrder] = useState<Order>(["A"]);

  return (
    <DndSort>
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
    </DndSort>
  );
}

export default App;
