import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" style={{ minWidth: "20.5rem" }}>
      <ProgressBar value="25" label="Value 25/100" error />
      <ProgressBar
        value="99"
        label="Value 99/100"
        error="Something went wrong"
      />
    </Flex>
  );
}

export default App;
