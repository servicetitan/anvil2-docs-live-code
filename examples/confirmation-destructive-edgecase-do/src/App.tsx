import { Dialog, Flex, Button, Combobox } from "@servicetitan/anvil2";
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
  const [selectedItems, setSelectedItems] = useState<Item[] | null>([]);

  return (
    <div style={{ minWidth: "23rem", minHeight: "18rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Cancel Receipt?</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="2">
            Select the reason why you are canceling this receipt.
            <Combobox
              multiple
              items={items}
              itemToString={(item) => (item ? item.name : "")}
              itemToKey={(item) => (item ? item.id : null)}
              selectedItems={selectedItems ?? []}
              onChange={setSelectedItems}
              filterOptions={{ keys: ["name"] }}
              style={{ width: "100%", maxWidth: "100%" }}
            >
              <Combobox.SearchField
                label="Select a reason"
                moreInfo="Please let us know why you are canceling"
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
        </Dialog.Content>
        <Dialog.Footer>
          <Flex justifyContent="flex-end">
            <Flex gap="3">
              <Dialog.CancelButton>Don&apos;t Cancel</Dialog.CancelButton>
              <Button appearance="danger">Cancel Receipt</Button>
            </Flex>
          </Flex>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
