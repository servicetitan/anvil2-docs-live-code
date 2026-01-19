import { ListView, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <ListView onSelectionChange={console.log}>
      <ListView.Option label="Luke Skywalker">
        <Flex direction="column" grow="1">
          Luke Skywalker
          <Text size="small" subdued>
            luke@servicetitan.com
          </Text>
        </Flex>
      </ListView.Option>
      <ListView.Option label="Obi-wan Kenobi">
        <Flex direction="column" grow="1">
          Obi-wan Kenobi
          <Text size="small" subdued>
            kenobi@servicetitan.com
          </Text>
        </Flex>
      </ListView.Option>
      <ListView.Option label="Din Djarin">
        <Flex direction="column" grow="1">
          Din Djarin
          <Text size="small" subdued>
            mando@servicetitan.com
          </Text>
        </Flex>
      </ListView.Option>
    </ListView>
  );
}

export default App;
