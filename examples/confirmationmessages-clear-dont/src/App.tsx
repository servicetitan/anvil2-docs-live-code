import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3">
      <Text>
        Are you sure you want to proceed? If you delete this, it will be gone
        forever, and there’s no way to recover it.
      </Text>
    </Flex>
  );
}

export default App;
