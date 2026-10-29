import {
  Dialog,
  Flex,
  Button,
  Text,
  SelectFieldSync,
  type SelectFieldOption,
} from "@servicetitan/anvil2";
import { useState } from "react";

const options: SelectFieldOption[] = [
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
  const [value, setValue] = useState<SelectFieldOption | null>(null);

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
            <SelectFieldSync
              label="Select an item"
              options={options}
              value={value}
              onSelectedOptionChange={setValue}
            />
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
