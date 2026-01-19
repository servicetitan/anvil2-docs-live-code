import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" grow={1}>
      <ProgressBar label="Indeterminate" indeterminate />
    </Flex>
  );
}

export default App;
