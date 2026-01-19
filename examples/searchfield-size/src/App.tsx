import { SearchField, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6" direction="column">
      <SearchField size="small" />
      <SearchField size="medium" />
      <SearchField size="large" />
    </Flex>
  );
}

export default App;
