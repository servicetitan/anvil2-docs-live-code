import {
  Dialog,
  Flex,
  Button,
  MultiSelectFieldSync,
  type MultiSelectFieldOption,
} from "@servicetitan/anvil2";
import { useState } from "react";

const options: MultiSelectFieldOption[] = [
  { id: 1, label: "First item" },
  { id: 2, label: "Second item" },
  { id: 3, label: "Third item" },
  { id: 4, label: "Fourth item" },
  { id: 5, label: "Fifth item" },
  { id: 6, label: "Sixth item" },
  { id: 7, label: "Seventh item" },
  { id: 8, label: "Eighth item" },
  { id: 9, label: "Ninth item" },
  { id: 10, label: "Tenth item" },
];

function App() {
  const [value, setValue] = useState<MultiSelectFieldOption[]>([]);

  return (
    <div style={{ minWidth: "23rem", minHeight: "18rem" }}>
      <Dialog enableScrollChaining open>
        <Dialog.Header>Cancel Receipt?</Dialog.Header>
        <Dialog.Content>
          <Flex direction="column" gap="2">
            Select the reason why you are canceling this receipt.
            <MultiSelectFieldSync
              label="Select a reason"
              moreInfo="Please let us know why you are canceling"
              options={options}
              value={value}
              onSelectedOptionsChange={setValue}
            />
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
