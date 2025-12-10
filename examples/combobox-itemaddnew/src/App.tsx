import { Combobox, Text } from "@servicetitan/anvil2";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "First item" },
    { id: 2, name: "Second item" },
    { id: 3, name: "Third item" },
    { id: 4, name: "Fourth item" },
    { id: 5, name: "Fifth item" },
    { id: 6, name: "Sixth item" },
    { id: 7, name: "Seventh item" },
    { id: 8, name: "Eighth item" },
    { id: 9, name: "Ninth item" },
    { id: 10, name: "Tenth item" },
  ]);

  const [selectedItems, setSelectedItems] = useState<Item[] | null>([]);

  const handleAddNew = (inputValue: string) => {
    const newItem = { id: items.length + 1, name: inputValue };
    setItems((prevItems) => [...prevItems, newItem]);
    setSelectedItems((prevItems) =>
      prevItems != null ? [...prevItems, newItem] : [newItem],
    );
  };

  return (
    <div style={{ minHeight: "284px" }}>
      <Combobox
        multiple
        items={items}
        itemToString={(item) => (item ? item.name : "")}
        itemToKey={(item) => (item ? item.id : null)}
        selectedItems={selectedItems ?? []}
        onChange={setSelectedItems}
      >
        <Combobox.SearchField
          label="Select an item"
          description="Add a new item"
        />
        <Combobox.Content>
          {({ items, inputValue }) => (
            <Combobox.List>
              {items.map((item, i) => (
                <Combobox.Item key={item.id} item={item} index={i}>
                  {item.name}
                </Combobox.Item>
              ))}

              <Combobox.Empty>
                <div
                  style={{
                    padding: "0.5rem 1rem",
                    textTransform: "uppercase",
                  }}
                >
                  <Text subdued size="small">
                    No match found
                  </Text>
                </div>
              </Combobox.Empty>

              <Combobox.ItemAddNew onSelection={handleAddNew}>
                + &nbsp; Add &ldquo;{inputValue}&rdquo;
              </Combobox.ItemAddNew>
            </Combobox.List>
          )}
        </Combobox.Content>
      </Combobox>
    </div>
  );
}

export default App;
