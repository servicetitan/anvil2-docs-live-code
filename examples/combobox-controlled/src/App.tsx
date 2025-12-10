import { Combobox, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

const items = [
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
];

function App() {
  const [selectedItem, setSelectedItem] = useState<Item | null>();

  return (
    <div style={{ minHeight: "284px" }}>
      <Flex gap={8}>
        <Flex grow={1} direction="column" alignItems="center" gap={4}>
          <Button onClick={() => setSelectedItem(items[0])}>
            Set First Item
          </Button>
          <Button onClick={() => setSelectedItem(items[1])}>
            Set Second Item
          </Button>
          <Button onClick={() => setSelectedItem(items[2])}>
            Set Third Item
          </Button>
          <Button onClick={() => setSelectedItem(items[3])}>
            Set Fourth Item
          </Button>
          <Button onClick={() => setSelectedItem(items[4])}>
            Set Fifth Item
          </Button>
        </Flex>

        <Combobox
          items={items}
          itemToString={(item) => (item ? item.name : "")}
          itemToKey={(item) => (item ? item.id : null)}
          selectedItem={selectedItem}
          onChange={setSelectedItem}
          filterOptions={{ keys: ["name"] }}
          style={{ width: "50vw", maxWidth: "50%" }}
        >
          <Combobox.SearchField
            label="Select an item (single)"
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
      </Flex>
    </div>
  );
}

export default App;
