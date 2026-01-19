import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" grow={1}>
      <ProgressBar label="Value of 0" value="0" />
      <ProgressBar label="Value of 50" value="50" />
      <ProgressBar label="Value of 100" value="100" />
    </Flex>
  );
}

export default App;
