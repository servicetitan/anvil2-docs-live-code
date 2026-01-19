import { Combobox, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

const items: Item[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Blueberry" },
  { id: 4, name: "Grapefruit" },
  { id: 5, name: "Orange" },
  { id: 6, name: "Peach" },
  { id: 7, name: "Pomegranate" },
  { id: 8, name: "Raspberry" },
  { id: 9, name: "Strawberry" },
  { id: 10, name: "Watermelon" },
];
const defaultItems = [
  items[0],
  items[1],
  items[2],
  items[3],
  items[4],
  items[5],
  items[6],
  items[7],
  items[8],
  items[9],
];

function App() {
  const [, setSelected] = useState<Item[] | null>();

  return (
    <Flex gap={6} direction="column">
      <Combobox
        items={items}
        itemToString={(item) => item?.name ?? ""}
        onChange={setSelected}
        filterOptions={{ keys: ["name"] }}
        multiple
        defaultSelectedItems={defaultItems}
      >
        <Combobox.SearchField label="Select Fruit" maxRows={1} />
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
        itemToString={(item) => item?.name ?? ""}
        onChange={setSelected}
        filterOptions={{ keys: ["name"] }}
        multiple
        defaultSelectedItems={defaultItems}
      >
        <Combobox.SearchField label="Select Fruit" maxRows={2} />
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
