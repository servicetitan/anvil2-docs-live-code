import {
  Dialog,
  Grid,
  SearchField,
  Tab,
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
        <Grid flexGrow="1" gap="2">
          <SearchField style={{ gap: 0 }} />

          <Tab defaultIndex={0} fill>
            <Tab.List>
              <Tab.Button id="t1" controls="p1" onClick={console.log}>
                All
              </Tab.Button>
              <Tab.Button id="t2" controls="p2" onClick={console.log}>
                Selected
              </Tab.Button>
            </Tab.List>
            <Tab.Panel id="p1">
              <Flex gap="4" direction="column">
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
              </Flex>
            </Tab.Panel>
            <Tab.Panel id="p2">
              {" "}
              <Flex gap="4" direction="column">
                <ListView
                  onSelectionChange={console.log}
                  defaultSelected={["Option2"]}
                >
                  <ListView.Option label="Option2">
                    <Text>Item 2</Text>
                  </ListView.Option>
                </ListView>
              </Flex>
            </Tab.Panel>
          </Tab>
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
