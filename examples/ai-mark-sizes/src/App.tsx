import { AiMark, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex alignItems="center" gap="8">
      <AiMark type="gradient" size="small" />
      <AiMark type="default" size="medium" />
      <AiMark type="default" size="large" />
      <AiMark type="default" size="xlarge" />
    </Flex>
  );
}

export default App;
