import {
  Dialog,
  Grid,
  SearchField,
  ListView,
  Text,
  Flex,
  Button,
} from "@servicetitan/anvil2";

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
              <Text>Item 1</Text>
            </ListView.Option>
            <ListView.Option label="Option2">
              <Text>Item 2</Text>
            </ListView.Option>
            <ListView.Option label="Option3">
              <Text>Item 3</Text>
            </ListView.Option>
            <ListView.Option label="Option4">
              <Text>Item 4</Text>
            </ListView.Option>
            <ListView.Option label="Option5">
              <Text>Item 5</Text>
            </ListView.Option>
            <ListView.Option label="Option6">
              <Text>Item 6</Text>
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
