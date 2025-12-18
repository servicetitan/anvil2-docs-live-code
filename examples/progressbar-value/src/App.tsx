import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" style={{ minWidth: "20.5rem" }}>
      <ProgressBar value={25} label="Value 25/100" />
      <ProgressBar value={3} max={4} label="Value 3/4" />
      <ProgressBar value="100" label="Value 100/100" />
    </Flex>
  );
}

export default App;
