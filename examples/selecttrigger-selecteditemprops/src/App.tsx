import {
  SelectTrigger,
  Flex,
  Dialog,
  Grid,
  Checkbox,
  Button,
  type CheckboxProps,
} from "@servicetitan/anvil2";
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
  const [selectedItems, setSelectedItems] = useState<Item[] | null>([
    items[4],
    items[5],
    items[6],
  ]);
  const [dialogSelectedItems, setDialogSelectedItems] = useState<Item[]>([
    items[4],
    items[5],
    items[6],
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
            selectedItemProps={(item) => ({
              color: item.color,
            })}
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
            <Checkbox.Group legend="Choose item(s)" required flexGrow="1">
              <Grid templateColumns="repeat(2, 1fr)" gap="1">
                {items.map((item) => (
                  <Checkbox
                    key={item.name}
                    label={item.name}
                    value={item.name}
                    checked={dialogSelectedItems.includes(item)}
                    onClick={handleCheckboxClick}
                  />
                ))}
              </Grid>
            </Checkbox.Group>
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
