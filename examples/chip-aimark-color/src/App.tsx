import { Chip, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="4" alignItems="center" wrap="wrap">
      <Chip label="AI job summary" aiMark color="#3e3e5f" />
      <Chip label="AI job summary" aiMark color="#7D165B" />
      <Chip label="AI job summary" aiMark color="#83ba43" />
      <Chip label="AI job summary" aiMark color="#DE9500" />
    </Flex>
  );
}

export default App;
