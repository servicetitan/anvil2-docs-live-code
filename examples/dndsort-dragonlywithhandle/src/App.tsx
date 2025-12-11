import { DndSort, Flex, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <DndSort>
      <DndSort.Card id="example" label="example" dragOnlyWithHandle>
        <Flex direction="column" gap="4">
          <Text>
            This card contains interactive elements. <br /> That means it should
            only be draggable with the handle.
          </Text>
          <Button appearance="primary" onClick={() => alert("button clicked")}>
            Click me
          </Button>
        </Flex>
      </DndSort.Card>
    </DndSort>
  );
}

export default App;
