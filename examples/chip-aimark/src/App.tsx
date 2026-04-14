import { Chip, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="4" alignItems="center">
      <Chip label="AI job summary" aiMark />
      <Chip label="AI job summary" aiMark size="small" />
    </Flex>
  );
}

export default App;
