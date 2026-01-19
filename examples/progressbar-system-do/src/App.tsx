import { ProgressBar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6" grow={1}>
      <ProgressBar
        label="cat.jpg"
        value="100"
        description="Upload successful"
      />
      <ProgressBar label="dog.jpg" value="40" description="4 MB of 8 MB" />
    </Flex>
  );
}

export default App;
