import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" grow={1}>
      <ProgressBar label="Default" value="30" />
      <ProgressBar label="Success" max="100" value="100" />
      <ProgressBar error label="Error" value="70" />
    </Flex>
  );
}

export default App;
