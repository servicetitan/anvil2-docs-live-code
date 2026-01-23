import { Combobox, Flex } from "@servicetitan/anvil2";
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
const defaultItems = [items[1], items[4]];

function App() {
  const [, setSelected] = useState<Item[] | null>();

  return (
    <Flex gap={6} direction="column" style={{ maxWidth: "500px" }}>
      <Combobox
        items={items}
        itemToString={(item) => (item ? item.name : "")}
        onChange={setSelected}
        filterOptions={{ keys: ["name"] }}
        multiple
        defaultSelectedItems={defaultItems}
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

      <Combobox
        items={items}
        itemToString={(item) => (item ? item.name : "")}
        onChange={setSelected}
        filterOptions={{ keys: ["name"] }}
        multiple
        defaultSelectedItems={[items[1], items[2], items[3], items[4]]}
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
    </Flex>
  );
}

export default App;
