import { Combobox } from "@servicetitan/anvil2";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

const items = [
  { id: 1, name: "First item" },
  { id: 2, name: "Second item" },
  { id: 3, name: "Third item (default)" },
  { id: 4, name: "Fourth item" },
  { id: 5, name: "Fifth item (default)" },
  { id: 6, name: "Sixth item" },
  { id: 7, name: "Seventh item" },
  { id: 8, name: "Eighth item" },
  { id: 9, name: "Ninth item" },
  { id: 10, name: "Tenth item" },
];

function App() {
  const [, setSelectedItems] = useState<Item[] | null>([items[2], items[4]]);

  return (
    <div style={{ minHeight: "284px" }}>
      <Combobox
        multiple
        items={items}
        itemToString={(item) => (item ? item.name : "")}
        itemToKey={(item) => (item ? item.id : null)}
        defaultSelectedItems={[items[2], items[4]]}
        onChange={setSelectedItems}
        filterOptions={{ keys: ["name"] }}
      >
        <Combobox.SearchField
          label="Select an item (multiple)"
          description="This is a Combobox.SearchField"
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
