import { Loader } from "@servicetitan/anvil2-ext-atlas";
import { Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4}>
      <Loader />
    </Flex>
  );
}

export default App;
