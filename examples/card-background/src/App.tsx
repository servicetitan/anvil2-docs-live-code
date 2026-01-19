import { Card, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap={6} direction="column">
      <Card>
        Card with a <br />
        default background
      </Card>
      <Card background="strong">
        Card with a <br />
        strong background
      </Card>
      <Card background="stronger">
        Card with a <br />
        stronger background
      </Card>
    </Flex>
  );
}

export default App;
