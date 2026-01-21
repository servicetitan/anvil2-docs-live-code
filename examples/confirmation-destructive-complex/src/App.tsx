import { Dialog, Flex, Button, Text, Combobox } from "@servicetitan/anvil2";
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
  { id: 6, name: "Sixth item" },
  { id: 7, name: "Seventh item" },
  { id: 8, name: "Eighth item" },
  { id: 9, name: "Ninth item" },
  { id: 10, name: "Tenth item" },
];

function App() {
  const [selectedItem, setSelectedItem] = useState<Item | null>();

  return (
    <div style={{ minWidth: "23rem", minHeight: "23.5rem" }}>
      <Dialog open>
        <Dialog.Header>[Action][Item]</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="2" style={{ width: "100%" }}>
            <Text variant="body" size="medium">
              Description
            </Text>
            <ul>
              <li>Description...</li>
              <li>Description...</li>
              <li>Description...</li>
            </ul>
            <Combobox
              items={items}
              itemToString={(item) => (item ? item.name : "")}
              itemToKey={(item) => (item ? item.id : null)}
              selectedItem={selectedItem}
              onChange={setSelectedItem}
              filterOptions={{ keys: ["name"] }}
              style={{ width: "100%", maxWidth: "100%" }}
            >
              <Combobox.SearchField label="Select an item" />
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
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Cancel</Dialog.CancelButton>
              <Button appearance="danger">[Action][Item]</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
