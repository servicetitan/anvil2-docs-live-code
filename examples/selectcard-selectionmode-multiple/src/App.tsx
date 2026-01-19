import { SelectCard, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <SelectCard.Group
      legend="Which method(s) of travel do you prefer?"
      required={false}
      selectionMode="multiple"
      onChange={(e) => {
        console.log(e);
      }}
    >
      <Flex alignItems="center" gap="2">
        <SelectCard
          onChange={() => {
            console.log("clicked");
          }}
          id="A"
        >
          <Text>Walking</Text>
        </SelectCard>
        <SelectCard
          onChange={() => {
            console.log("clicked");
          }}
          id="B"
        >
          <Text>Biking</Text>
        </SelectCard>
        <SelectCard
          onChange={() => {
            console.log("clicked");
          }}
          id="C"
        >
          <Text>Driving</Text>
        </SelectCard>
      </Flex>
    </SelectCard.Group>
  );
}

export default App;
