import { SelectCard, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <SelectCard.Group
      legend="Which method(s) of travel do you prefer?"
      selectionMode="multiple"
      defaultValue={["A", "C"]}
      onChange={(e) => {
        console.log(e);
      }}
    >
      <Flex alignItems="center" gap="2">
        <SelectCard id="A">
          <Text>Walking</Text>
        </SelectCard>
        <SelectCard id="B">
          <Text>Biking</Text>
        </SelectCard>
        <SelectCard id="C">
          <Text>Driving</Text>
        </SelectCard>
      </Flex>
    </SelectCard.Group>
  );
}

export default App;
