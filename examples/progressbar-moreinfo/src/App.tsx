import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" grow={1}>
      <ProgressBar
        label="Label text"
        labelProps={{ moreInfo: "Tooltip explaining the Progress Bar" }}
        value="50"
      />
    </Flex>
  );
}

export default App;
