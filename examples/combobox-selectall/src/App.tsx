import { Combobox } from "@servicetitan/anvil2";
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

function App() {
  const [selectedItems, setSelected] = useState<Item[] | null>();

  return (
    <div style={{ minWidth: "384px", minHeight: "300px" }}>
      <Combobox
        items={items}
        itemToString={(item) => (item ? item.name : "")}
        onChange={setSelected}
        filterOptions={{ keys: ["name"] }}
        selectAll={{
          label: "Select All",
          onSelection: () => {
            setSelected(items);
          },
          isChecked: selectedItems?.length === items.length,
        }}
        selectedItems={selectedItems ?? undefined}
        multiple
        defaultIsOpen
      >
        <Combobox.SearchField label="Select Fruit" />
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
    </div>
  );
}

export default App;
