import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="8" grow={1}>
      <ProgressBar label="Default" value="50" description="Description text" />
      <ProgressBar label="Error" value="50" error="Error Text" />
      <ProgressBar
        label="Success"
        value="100"
        description="Description Text"
        error="Error Text"
      />
    </Flex>
  );
}

export default App;
