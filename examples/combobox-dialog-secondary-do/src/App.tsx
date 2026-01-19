import {
  Dialog,
  Grid,
  SearchField,
  ListView,
  Text,
  Tooltip,
  Flex,
  Button,
} from "@servicetitan/anvil2";
import Edit from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";

function App() {
  return (
    <Dialog open>
      <Dialog.Header>Select items</Dialog.Header>
      <Dialog.Content>
        <Grid flexGrow="1" gap="4">
          <SearchField style={{ gap: 0 }} />
          <ListView
            onSelectionChange={console.log}
            defaultSelected={["Option2"]}
          >
            <ListView.Option label="Option1">
              <Text flexGrow={1}>Item 1</Text>
              <Tooltip placement="top-end">
                <Tooltip.Content>Edit Item</Tooltip.Content>
                <Tooltip.Trigger>
                  <Button size="small" icon={Edit} />
                </Tooltip.Trigger>
              </Tooltip>
            </ListView.Option>
            <ListView.Option label="Option2">
              <Text flexGrow={1}>Item 2</Text>
              <Tooltip placement="top-end">
                <Tooltip.Content>Edit Item</Tooltip.Content>
                <Tooltip.Trigger>
                  <Button size="small" icon={Edit} />
                </Tooltip.Trigger>
              </Tooltip>
            </ListView.Option>
            <ListView.Option label="Option3">
              <Text flexGrow={1}>Item 3</Text>
              <Tooltip placement="top-end">
                <Tooltip.Content>Edit Item</Tooltip.Content>
                <Tooltip.Trigger>
                  <Button size="small" icon={Edit} />
                </Tooltip.Trigger>
              </Tooltip>
            </ListView.Option>
            <ListView.Option label="Option4">
              <Text flexGrow={1}>Item 4</Text>
              <Tooltip placement="top-end">
                <Tooltip.Content>Edit Item</Tooltip.Content>
                <Tooltip.Trigger>
                  <Button size="small" icon={Edit} />
                </Tooltip.Trigger>
              </Tooltip>
            </ListView.Option>
            <ListView.Option label="Option5">
              <Text flexGrow={1}>Item 5</Text>
              <Tooltip placement="top-end">
                <Tooltip.Content>Edit Item</Tooltip.Content>
                <Tooltip.Trigger>
                  <Button size="small" icon={Edit} />
                </Tooltip.Trigger>
              </Tooltip>
            </ListView.Option>
            <ListView.Option label="Option6">
              <Text flexGrow={1}>Item 6</Text>
              <Tooltip placement="top-end">
                <Tooltip.Content>Edit Item</Tooltip.Content>
                <Tooltip.Trigger>
                  <Button size="small" icon={Edit} />
                </Tooltip.Trigger>
              </Tooltip>
            </ListView.Option>
          </ListView>
        </Grid>
      </Dialog.Content>
      <Dialog.Footer>
        <Flex grow="1" />
        <Dialog.CancelButton>Cancel</Dialog.CancelButton>
        <Button appearance="primary">Apply</Button>
      </Dialog.Footer>
    </Dialog>
  );
}

export default App;
