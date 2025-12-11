import {
  SelectTrigger,
  Flex,
  Dialog,
  CheckboxGroup,
  Checkbox,
  Button,
  type CheckboxProps,
} from "@servicetitan/anvil2";
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
];

function App() {
  const [selectedItems, setSelectedItems] = useState<Item[] | null>([
    items[2],
    items[3],
  ]);
  const [dialogSelectedItems, setDialogSelectedItems] = useState<Item[]>([
    items[2],
    items[3],
  ]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => setOpenDialog(false);

  const handleCancelClick = () => setDialogSelectedItems(selectedItems ?? []);

  const handleApplyClick = () => {
    setOpenDialog(false);
    setSelectedItems(dialogSelectedItems);
  };

  const handleCheckboxClick: CheckboxProps["onClick"] = (e, state) => {
    if (e && state) {
      const { checked } = state;

      if (checked) {
        setDialogSelectedItems((prevItems) =>
          prevItems.filter(
            (item) => item.name !== (e.target as HTMLInputElement).value,
          ),
        );
      } else {
        const selectedItem = items.find(
          (item) => item.name === (e.target as HTMLInputElement).value,
        );

        if (selectedItem) {
          setDialogSelectedItems((prevItems) => [...prevItems, selectedItem]);
        }
      }
    }
  };

  return (
    <div style={{ minHeight: "284px" }}>
      <div style={{ padding: "1.5rem" }}>
        <Flex direction="column" gap="6">
          <SelectTrigger
            multiple
            selectedItems={selectedItems ?? []}
            itemToString={(item) => (item ? item.name : "")}
            onChange={(items: Item[] | null) => setSelectedItems(items)}
            onClick={() => {
              setDialogSelectedItems(selectedItems ?? []);
              setOpenDialog(true);
            }}
            label="Label"
            placeholder="Placeholder"
            hint="Hint text"
            moreInfo="More info"
            size="large"
            required
          />
        </Flex>

        <Dialog open={openDialog} onClose={handleDialogClose}>
          <Dialog.Header>Dialog Header</Dialog.Header>

          <Dialog.Content>
            <CheckboxGroup legend="Choose item(s)" required>
              {items.map((item) => (
                <Checkbox
                  key={item.name}
                  label={item.name}
                  value={item.name}
                  checked={dialogSelectedItems.includes(item)}
                  onClick={handleCheckboxClick}
                />
              ))}
            </CheckboxGroup>
          </Dialog.Content>

          <Dialog.Footer>
            <Flex gap="3" justifyContent="flex-end">
              <Dialog.CancelButton onClick={handleCancelClick}>
                Cancel
              </Dialog.CancelButton>
              <Button appearance="primary" onClick={handleApplyClick}>
                Apply
              </Button>
            </Flex>
          </Dialog.Footer>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
