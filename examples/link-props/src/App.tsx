import { Link, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap={4} justifyContent="space-around">
      <Link>Primary Link</Link>
      <Link target="_blank">External Link</Link>
      <Link appearance="secondary">Secondary Link</Link>
      <Link ghost>Ghost Link</Link>
    </Flex>
  );
}

export default App;
