import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" grow={1}>
      <ProgressBar value="50" aria-label="Progress Bar Label" />
      <ProgressBar error value="50" aria-label="Progress Bar Label" />
      <ProgressBar value="100" aria-label="Progress Bar Label" />
    </Flex>
  );
}

export default App;
