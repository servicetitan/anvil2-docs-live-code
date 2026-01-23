import {
  SelectTrigger,
  Flex,
  Dialog,
  Grid,
  SearchField,
  ListView,
  Text,
  Button,
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
  const [openDialog, setOpenDialog] = useState(true);

  const handleDialogClose = () => setOpenDialog(false);

  const handleCancelClick = () => setDialogSelectedItems(selectedItems ?? []);

  const handleApplyClick = () => {
    setOpenDialog(false);
    setSelectedItems(dialogSelectedItems);
  };

  const handleSelectionChange = (selectedLabels: string[]) => {
    const selectedItems = items.filter((item) =>
      selectedLabels.includes(item.name),
    );
    setDialogSelectedItems(selectedItems);
  };

  const selectedLabels = dialogSelectedItems.map((item) => item.name);

  return (
    <div style={{ minHeight: "443px", minWidth: "455px" }}>
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
            <Grid flexGrow="1" gap="4">
              <SearchField style={{ gap: 0 }} />
              <ListView
                onSelectionChange={handleSelectionChange}
                selected={selectedLabels}
              >
                {items.map((item) => (
                  <ListView.Option key={item.id} label={item.name}>
                    <Text>{item.name}</Text>
                  </ListView.Option>
                ))}
              </ListView>
            </Grid>
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
