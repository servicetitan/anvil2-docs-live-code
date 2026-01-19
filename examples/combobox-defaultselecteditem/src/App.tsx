import { Combobox } from "@servicetitan/anvil2";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

const items: Item[] = [
  { id: 1, name: "Casey Maxwell" },
  { id: 2, name: "Giovanni Saunders" },
  { id: 3, name: "Harper Gonzalez" },
  { id: 4, name: "Jane Doe" },
  { id: 5, name: "Meadow Hunter" },
];
const defaultItem = items[0];

function App() {
  const [, setSelected] = useState<Item | null>();

  return (
    <Combobox
      items={items}
      itemToString={(item) => (item ? item.name : "")}
      onChange={setSelected}
      filterOptions={{ keys: ["name"] }}
      defaultSelectedItem={defaultItem}
    >
      <Combobox.SearchField label="Select Teammate" />
      <Combobox.Content>
        {({ items }) => (
          <Combobox.List>
            {items.map((item, i) => (
              <Combobox.Item key={item.id} item={item} index={i}>
                {item.name}
              </Combobox.Item>
            ))}
          </Combobox.List>
        )}
      </Combobox.Content>
    </Combobox>
  );
}

export default App;
