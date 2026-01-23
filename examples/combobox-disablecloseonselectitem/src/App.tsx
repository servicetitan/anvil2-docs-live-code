import { Combobox } from "@servicetitan/anvil2";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

const items: Item[] = [
  { id: 1, name: "First item" },
  { id: 2, name: "Second item" },
  { id: 3, name: "Third item" },
  { id: 4, name: "Fourth item" },
  { id: 5, name: "Fifth item" },
];

function App() {
  const [, setSelected] = useState<Item[] | null>();

  return (
    <div style={{ minWidth: "384px", minHeight: "300px" }}>
      <Combobox
        items={items}
        itemToString={(item) => (item ? item.name : "")}
        onChange={setSelected}
        filterOptions={{ keys: ["name"] }}
        multiple
        disableCloseOnSelectItem
        defaultIsOpen
      >
        <Combobox.SearchField
          label="Select items"
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
