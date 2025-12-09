import { Divider, Flex, Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex style={{ height: "101px" }}>
      <Card background="strong" flexGrow="1" />
      <Divider vertical spacing="2" />
      <Card background="strong" flexGrow="1" />
    </Flex>
  );
}

export default App;
