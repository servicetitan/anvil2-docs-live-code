import { SelectCard, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <SelectCard.Group
      legend="Select your preferred pet"
      required={false}
      selectionMode="single"
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
          <Text>Cat</Text>
        </SelectCard>
        <SelectCard
          onChange={() => {
            console.log("clicked");
          }}
          id="B"
        >
          <Text>Dog</Text>
        </SelectCard>
        <SelectCard
          onChange={() => {
            console.log("clicked");
          }}
          id="C"
        >
          <Text>Bird</Text>
        </SelectCard>
      </Flex>
    </SelectCard.Group>
  );
}

export default App;
