import { SearchField, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6" direction="column">
      <SearchField />
      <SearchField disabled />
    </Flex>
  );
}

export default App;
