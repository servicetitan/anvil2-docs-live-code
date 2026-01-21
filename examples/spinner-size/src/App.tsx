import { Spinner, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </Flex>
  );
}

export default App;
