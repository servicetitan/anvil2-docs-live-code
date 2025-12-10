import { Combobox, Flex, Text } from "@servicetitan/anvil2";
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
      <Combobox
        items={items}
        itemToString={(item) => (item ? item.name : "")}
        itemToKey={(item) => (item ? item.id : null)}
        selectedItem={selectedItem}
        onChange={setSelectedItem}
        filterOptions={{ keys: ["name"] }}
      >
        <Combobox.SearchField label="Select an item" />
        <Combobox.Content>
          {({ items }) => (
            <>
              <Combobox.Empty>
                <Flex
                  gap="1"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  style={{ padding: "var(--size-2)" }}
                >
                  <Text variant="headline" el="h3" size="medium">
                    😕 No matches
                  </Text>
                  <Text>Please try again.</Text>
                </Flex>
              </Combobox.Empty>
              <Combobox.List>
                {items.map((item, i) => (
                  <Combobox.Item key={item.id} item={item} index={i}>
                    {item.name}
                  </Combobox.Item>
                ))}
              </Combobox.List>
            </>
          )}
        </Combobox.Content>
      </Combobox>
    </div>
  );
}

export default App;
