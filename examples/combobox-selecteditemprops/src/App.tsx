import { Combobox } from "@servicetitan/anvil2";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
  color: string;
};

const items = [
  { id: 1, name: "Red", color: "red" },
  { id: 2, name: "Purple", color: "purple" },
  { id: 3, name: "Black", color: "black" },
  { id: 4, name: "Gray", color: "gray" },
  { id: 5, name: "Gold", color: "gold" },
  { id: 6, name: "Cyan", color: "cyan" },
  { id: 7, name: "Pink", color: "pink" },
  { id: 8, name: "Blue", color: "blue" },
  { id: 9, name: "Green", color: "green" },
];

function App() {
  const [, setSelectedItems] = useState<Item[] | null>([
    items[4],
    items[5],
    items[6],
  ]);

  return (
    <div style={{ minWidth: "384px", minHeight: "284px" }}>
      <Combobox
        multiple
        items={items}
        itemToString={(item) => (item ? item.name : "")}
        itemToKey={(item) => (item ? item.id : null)}
        defaultSelectedItems={[items[4], items[5], items[6]]}
        onChange={setSelectedItems}
        filterOptions={{ keys: ["name"] }}
        defaultIsOpen
      >
        <Combobox.SearchField
          label="Select a color"
          description="This is an example of color customization"
          selectedItemProps={(item) => ({
            color: item.color,
          })}
        />
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
