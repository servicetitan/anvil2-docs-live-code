import { useState } from "react";
import { DndSort } from "@servicetitan/anvil2";

type Items = {
  [key: string | number]: { name: string; type: string };
};

type Order = (string | number)[];

const teams: Items = {
  A: {
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper vitae metus ut venenatis. Morbi commodo ante nec faucibus porta. Etiam dignissim neque id libero mollis pretium. Cras vitae mattis mauris. Ut ut enim porta, blandit nibh et, finibus massa. Ut tincidunt nibh risus, et dictum felis tristique non.",
    type: "item",
  },
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
          style={{ width: "400px" }}
        >
          {teams[itemId].name}
        </DndSort.Card>
      ))}
    </DndSort>
  );
}

export default App;
